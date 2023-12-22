
import React from "react";
import CancelIcon from "@/app/blog/_component/icons/cancel.icon";
import {SelectableItem} from "@/app/blog/_component/input/selection.input";
import {normalize} from "@/app/blog/lib/utils";

type SelectedBoxProps<T> = {
    selectedItem: T;
    onClick: () => void;
};

function SelectedBox<T extends SelectableItem>({ selectedItem, onClick }: SelectedBoxProps<T>) {
    return (
        <div className="flex justify-between items-center gap-2 bg-white py-1 px-2 text-gray-700 font-medium">
            <span>{normalize(selectedItem.designation)}</span>
            <CancelIcon onClick={onClick} />
        </div>
    );
}

export default SelectedBox;