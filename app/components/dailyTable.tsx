"use client";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    createColumnHelper,
} from "@tanstack/react-table";
import { useLanguage } from "../context/languageContext";
import { messages } from "../lib/messages";

type DailyRow = {
    date: string;
    max: number;
    min: number;
    code: string;
};

export default function DailyTable({ data }: { data: DailyRow[] }) {
    const { language } = useLanguage();

    const t = messages[language];

    const columnHelper = createColumnHelper<DailyRow>();

    const columns = [
        columnHelper.accessor("date", {
            header: t.date,
        }),

        columnHelper.accessor("max", {
            header: t.max,
            cell: (info) => `${info.getValue()}℃`,
        }),

        columnHelper.accessor("min", {
            header: t.min,
            cell: (info) => `${info.getValue()}℃`,
        }),

        columnHelper.accessor("code", {
            header: t.code,
        }),
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div
            className="
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            dark:border-zinc-700
            shadow-sm
            bg-white
            dark:bg-zinc-900
        "
        >
            <table className="w-full text-md">
                <thead className="bg-gray-300 dark:bg-zinc-800 text-lg">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="
                                    px-4
                                    py-3
                                    text-center
                                    font-semibold
                                    text-gray-800
                                    dark:text-gray-100
                                    border-b
                                    border-gray-200
                                    dark:border-zinc-700
                                "
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className="
                            hover:bg-gray-50
                            dark:hover:bg-zinc-800
                            transition
                        "
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className="
                                    px-4
                                    py-3
                                    text-center
                                    border-b
                                    border-gray-200
                                    dark:border-zinc-700
                                    text-gray-600
                                    dark:text-gray-300
                                "
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
