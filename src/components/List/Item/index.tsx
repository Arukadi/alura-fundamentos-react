import { IStudy } from "../../../types/study";
import style from "./Item.module.scss";

interface Props extends IStudy {
	selectStudy: (selectedStudy: IStudy) => void;
}

export default function Item({
	task,
	time,
	selected,
	completed,
	id,
	selectStudy,
}: Props) {
	return (
		<li
			className={`${style.item} ${
				selected ? style.itemSelecionado : ""
			} ${completed ? style.itemCompletado : ""}`}
			onClick={() =>
				!completed &&
				selectStudy({ task, time, selected, completed, id })
			}
		>
			<h3>{task}</h3>
			<span>{time}</span>
			{completed && (
				<span
					className={style.concluido}
					arial-label="Tarefa completada"
				></span>
			)}
		</li>
	);
}
