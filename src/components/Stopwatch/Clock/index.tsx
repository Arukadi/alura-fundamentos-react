import style from "./Clock.module.scss";

interface Props {
	time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
	let hours = Math.floor(time / 60);
	let minutes = time % 60;

	let [hoursTen, hoursUnit] = String(hours).padStart(2, "0");
	let [minutesTen, minutesUnit] = String(minutes).padStart(2, "0");

	return (
		<>
			<span className={style.relogioNumero}>{hoursTen}</span>
			<span className={style.relogioNumero}>{hoursUnit}</span>
			<span className={style.relogioDivisao}>:</span>
			<span className={style.relogioNumero}>{minutesTen}</span>
			<span className={style.relogioNumero}>{minutesUnit}</span>
		</>
	);
}
