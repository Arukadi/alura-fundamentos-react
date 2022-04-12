import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { IStudy } from "../types/study";
import style from "./App.module.scss";

function App() {
	let [studies, setStudies] = useState<IStudy[]>([]);
	let [selected, setSelected] = useState<IStudy>();

	function selectStudy(selectedStudy: IStudy) {
		setSelected(selectedStudy);
		setStudies((oldStudies) =>
			oldStudies.map((study) => ({
				...study,
				selected: study.id === selectedStudy.id,
			}))
		);
	}

	function completeStudy() {
		if (selected) {
			setSelected(undefined);
			setStudies((oldStudies) =>
				oldStudies.map((study) => {
					if (selected?.id === study.id) {
						return {
							...study,
							selected: false,
							completed: true,
						};
					}

					return study;
				})
			);
		}
	}

	return (
		<div className={style.AppStyle}>
			<Form setStudies={setStudies}></Form>
			<List studies={studies} selectStudy={selectStudy}></List>
			<Stopwatch
				selected={selected}
				completeStudy={completeStudy}
			></Stopwatch>
		</div>
	);
}

export default App;
