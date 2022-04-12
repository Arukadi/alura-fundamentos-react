import React, { useState } from "react";
import { IStudy } from "../../types/study";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
	setStudies: React.Dispatch<React.SetStateAction<IStudy[]>>;
}

export default function Form({ setStudies }: Props) {
	let [task, setTask] = useState("");
	let [time, setTime] = useState("01:00");

	function addStudy(event: React.FormEvent) {
		event.preventDefault();
		setStudies((oldStudies) => [
			...oldStudies,
			{ task, time, selected: false, completed: false, id: uuidv4() },
		]);

		setTask("");
		setTime("01:00");
	}

	return (
		<form className={style.novaTarefa} onSubmit={addStudy}>
			<div className={style.inputContainer}>
				<label htmlFor="task">Adicione um novo estudo</label>
				<input
					type="text"
					name="task"
					value={task}
					onChange={(event) => setTask(event.target.value)}
					id="task"
					placeholder="O que você quer estudar?"
					required
				/>
			</div>
			<div className={style.inputContainer}>
				<label htmlFor="time">Tempo</label>
				<input
					type="time"
					step="3600000"
					name="time"
					id="time"
					value={time}
					onChange={(event) => setTime(event.target.value)}
					required
				/>
			</div>

			<Button type="submit">Adicionar</Button>
		</form>
	);
}
