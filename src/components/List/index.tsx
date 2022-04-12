import { IStudy } from "../../types/study";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
	studies: IStudy[];
	selectStudy: (selectedStudy: IStudy) => void;
}

function List({ studies, selectStudy }: Props) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{studies.map((study) => (
					<Item selectStudy={selectStudy} key={study.id} {...study} />
				))}
			</ul>
		</aside>
	);
}

export default List;
