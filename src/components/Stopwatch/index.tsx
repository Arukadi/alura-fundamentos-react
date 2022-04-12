import { useEffect, useState } from "react";
import { IStudy } from "../../types/study";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
	selected: IStudy | undefined;
	completeStudy: () => void;
}

export default function Stopwatch({ selected, completeStudy }: Props) {
	let [time, setTime] = useState<number>();

	useEffect(() => {
		if (selected?.time) {
			let [hours, minutes] = selected.time.split(":");
			let totalMinutes = Number(hours) * 60 + Number(minutes);

			setTime(totalMinutes);
		}
	}, [selected]);

	function countdown(time: number = 0) {
		setTimeout(() => {
			if (time > 0) {
				setTime(time - 1);
				return countdown(time - 1);
			}

			completeStudy();
		}, 60000);
	}

	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>
				Escolha um card e inicie o cronômetro
			</p>
			<div className={style.relogioWrapper}>
				<Clock time={time}></Clock>
			</div>
			<Button
				onClick={() => {
					countdown(time);
				}}
			>
				Começar
			</Button>
		</div>
	);
}
