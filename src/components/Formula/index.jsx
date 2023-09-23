import {
	ChevronDown,
	ChevronRight,
	Info,
	MoreHorizontal,
	Plus,
} from "lucide-react";
import { useState } from "react";
import CustomInput from "./CustomInput";

const Formula = () => {
	const [isOpen, setIsOpen] = useState(true);

	const openHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="container mx-auto mt-10 border rounded-md border-slate-200 text-slate-900">
			<div className="flex justify-between items-center bg-slate-200 p-3">
				<div className="flex gap-1 items-center">
					{isOpen ? (
						<ChevronDown
							className="cursor-pointer text-slate-600 hover:text-slate-900"
							onClick={openHandler}
						/>
					) : (
						<ChevronRight
							className="cursor-pointer text-slate-600 hover:text-slate-900"
							onClick={openHandler}
						/>
					)}
					<p className="text-xs">New Formula</p>
				</div>
				<div className="flex gap-1">
					<Info className="cursor-pointer text-slate-600 hover:text-slate-900" />
					<MoreHorizontal className="cursor-pointer text-slate-600 hover:text-slate-900" />
				</div>
			</div>

			<div>
				<div className="flex justify-between items-center py-2 px-4 bg-slate-100">
					<p className="text-2xl">$0.00</p>
					<p className="text-xs bg-slate-200 rounded-md p-1">Sep 2023</p>
				</div>
				{isOpen ? (
					<div className="p-3 flex flex-col gap-2">
						<CustomInput />
						<div className="cursor-pointer flex gap-1 text-blue-600 hover:text-blue-800 text-xs items-center">
							<Plus className="w-5 h-5" />
							<a>Add Time Segment</a>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Formula;
