import { useEffect, useState } from 'react';
import IconDice from './icon-dice';

export default function App() {
	const [advice, setAdvice] = useState('');
	const [adviceNum, setAdviceNum] = useState('');
  const [count, setCount] = useState(0);

	async function getAdvice() {
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();
		setAdvice(data.slip.advice);
		setAdviceNum(data.slip.id);
		setCount((c) => c + 1);
	}

	useEffect(function () {
		getAdvice();
	}, []);

	return (
		<div className="App">
			<div className="card">
        <p>advice: #{adviceNum}</p>
				<h1>{advice}</h1>
				<button onClick={getAdvice}>
          <IconDice/>
        </button>
			</div>
		</div>
	);
}