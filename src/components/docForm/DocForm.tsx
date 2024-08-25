'use client'
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MultiFileDropzone, type FileState } from '../multiFileUpload/MultiFileUpload';
import { useEdgeStore } from '@/lib/edgestore';
import { FormEvent, useState } from 'react';
import { createDocument } from '@/constants/actions/docActions';

type Customer = {
    CustomerID: string
    name: string
}

export default function Form({ customers }: { customers: Customer[] }) {
    const initialState = { message: null, errors: {} };
    const [fileStates, setFileStates] = useState<FileState[]>([]);
    const [url, setUrl] = useState<string>()
    console.log("state url", url)
    const { edgestore } = useEdgeStore();
    const [data, setData] = useState({
        documentUrl: '',
        type: '',
        version: undefined,

    })
    // const [state, dispatch] = useFormState(createDocument, initialState);
    function updateFileProgress(key: string, progress: FileState['progress']) {
        setFileStates((fileStates) => {
            const newFileStates = structuredClone(fileStates);
            const fileState = newFileStates.find(
                (fileState) => fileState.key === key,
            );
            if (fileState) {
                fileState.progress = progress;
            }
            return newFileStates;
        });
    }

    async function saveDocument(e: FormEvent) {
        const docData = data
        e.preventDefault()
        await edgestore.publicFiles.confirmUpload({
            url: docData.documentUrl,
        })
        // createDocument()
        console.log("Document Saved")
    }

    return (
        <form onSubmit={saveDocument} className='bg-white border ml-8 rounded-md'>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Choose customer
                    </label>
                    <div className="relative">
                        <select
                            id="customer"
                            name="customerId"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            aria-describedby="customer-error"
                        >
                            <option value="" disabled>
                                Select a customer
                            </option>
                            {customers.map(customer =>
                                <option key={customer.CustomerID} value={customer.name}>
                                    {customer.name}
                                </option>
                            )}
                        </select>
                        <FaUserCircle className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    {/* <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.customerId &&
                            state.errors.customerId.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div> */}
                </div>

                {/* Document field */}
                <div>
                    <MultiFileDropzone
                        value={fileStates}
                        onChange={(files) => {
                            setFileStates(files);
                        }}
                        onFilesAdded={async (addedFiles) => {
                            setFileStates([...fileStates, ...addedFiles]);
                            await Promise.all(
                                addedFiles.map(async (addedFileState) => {
                                    try {
                                        const res = await edgestore.publicFiles.upload({
                                            file: addedFileState.file,
                                            options: {
                                                temporary: true,
                                            },
                                            onProgressChange: async (progress) => {
                                                updateFileProgress(addedFileState.key, progress);
                                                if (progress === 100) {
                                                    // wait 1 second to set it to complete
                                                    // so that the user can see the progress bar at 100%
                                                    await new Promise((resolve) => setTimeout(resolve, 1000));
                                                    updateFileProgress(addedFileState.key, 'COMPLETE');
                                                }
                                            },
                                        });
                                        setUrl(res.url)
                                    } catch (err) {
                                        updateFileProgress(addedFileState.key, 'ERROR');
                                    }
                                }),
                            );
                        }}
                    />
                </div>

                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Select Document
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="type"
                                name="docType"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                                aria-describedby="customer-error"
                            >
                                <option value="" disabled>
                                    Select Type
                                </option>
                                <option value="pdf">
                                    PDF
                                </option>
                                <option value="word">
                                    Word
                                </option>
                                <option value="excel">
                                    Excel
                                </option>

                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                                Version
                            </label>
                            <div className="relative">
                                <input type="number" defaultValue={0} />
                            </div>
                            {/* <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.customerId &&
                            state.errors.customerId.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div> */}
                        </div>

                        {/* <div id="amount-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.amount &&
                                state.errors.amount.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div> */}
                    </div>
                </div>

                {/* Invoice Status */}
                <fieldset>
                    <legend className="mb-2 block text-sm font-medium">
                        Set the invoice status
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="archive"
                                    name="status"
                                    type="radio"
                                    value="archive"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="status-error"
                                />
                                <label
                                    htmlFor="archive"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    Archive
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="active"
                                    name="status"
                                    type="radio"
                                    value="active"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="status-error"
                                />
                                <label
                                    htmlFor="active"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Active
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* <div id="status-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.status &&
                            state.errors.status.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div> */}
                </fieldset>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/documents"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                >
                    Create Document
                </button>
            </div>
        </form >
    );
}
