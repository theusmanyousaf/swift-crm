'use client'

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { MultiFileDropzone, type FileState } from "../multiFileUpload/MultiFileUpload";
import { useEdgeStore } from "@/lib/edgestore";
import { db } from "../../../db";
import { usePathname } from "next/navigation";
import { fetchDocument, updateDocument } from "@/constants/actions/docActions";
import { Document } from "@prisma/client";
import { FaUserCircle } from "react-icons/fa";

type DocData = {
    customer: {
        name: string;
    };
} & {
    DocumentID: string;
    documentName: string;
    type: string;
    version: number;
    status: string;
    documentUrl: string;
    createdAt: Date;
    CustomerID: string;
}

export default function DocumentEditForm() {
    const pathname = usePathname();
    const pathnameArr = pathname.split('/')
    const docID = pathnameArr[pathnameArr.length - 1]
    const [oldData, setOldData] = useState<DocData>()
    const [fileStates, setFileStates] = useState<FileState[]>([]);
    const [url, setUrl] = useState<string>()
    const { edgestore } = useEdgeStore();
    const [data, setData] = useState({
        documentName: '',
        type: '',
        version: 0,
        status: 'active',
        documentUrl: '',
        CustomerID: '',
    });

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

    useEffect(() => {
        const getUser = async () => {
            try {
                const oldDocData = await fetchDocument(docID)
                setOldData(oldDocData as DocData)
            } catch (error) {
                console.error("Failed to fetch user", error);
            }
        };
        getUser();
    }, []);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;

        const parsedValue = name === 'version' ? parseInt(value, 10) : value;

        setData((prevData) => ({
            ...prevData,
            [name]: value,
            [name]: parsedValue,
        }));
    }

    async function editDocument(e: FormEvent) {
        e.preventDefault();
        const docData = { ...data, documentUrl: url as string }; // Assuming url is part of document data
        await edgestore.publicFiles.confirmUpload({
            url: docData.documentUrl as string,
        });
        console.log("Document Edited:", docData);
        const res = await updateDocument(docID, docData)
        console.log("update res", res)
    }
    return (
        <form onSubmit={editDocument} className='bg-white border ml-8 rounded-md'>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Choose customer
                    </label>
                    <div className="relative">
                        <select
                            id="customer"
                            name="CustomerID"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={data.CustomerID}
                            onChange={handleInputChange}
                            aria-describedby="customer-error"
                        >
                            <option value="" disabled>
                                Select a customer
                            </option>
                            <option key={oldData?.CustomerID} value={oldData?.CustomerID}>
                                {oldData?.customer.name}
                            </option>
                        </select>
                        <FaUserCircle className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Document Name */}
                <div className="mb-4">
                    <label htmlFor="documentName" className="mb-2 block text-sm font-medium">
                        Document Name: [{oldData?.documentName}]
                    </label>
                    <div className="relative">
                        <input
                            id="documentName"
                            name="documentName"
                            type="text"
                            value={data.documentName}
                            onChange={handleInputChange}
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            placeholder="Change document name"
                        />
                    </div>
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
                                                replaceTargetUrl: oldData?.documentUrl
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

                {/* Document Type */}
                <div className="mb-4">
                    <label htmlFor="type" className="mb-2 block text-sm font-medium">
                        Change Document
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <select
                            id="type"
                            name="type"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={data.type}
                            onChange={handleInputChange}
                            aria-describedby="type-error"
                        >
                            <option value="" disabled>
                                Select Type
                            </option>
                            <option value="pdf">PDF</option>
                            <option value="word">Word</option>
                            <option value="excel">Excel</option>
                        </select>
                    </div>
                </div>

                {/* Document Version */}
                <div className="mb-4">
                    <label htmlFor="version" className="mb-2 block text-sm font-medium">
                        Version
                    </label>
                    <div className="relative">
                        <input
                            id="version"
                            name="version"
                            type="number"
                            value={data.version}
                            onChange={handleInputChange}
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Document Status */}
                <fieldset>
                    <legend className="mb-2 block text-sm font-medium">
                        Change document Status
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="archive"
                                    name="status"
                                    type="radio"
                                    value="archive"
                                    checked={data.status === 'archive'}
                                    onChange={handleInputChange}
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
                                    checked={data.status === 'active'}
                                    onChange={handleInputChange}
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
                    className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                    Edit Document
                </button>
            </div>
        </form >
    )
}
