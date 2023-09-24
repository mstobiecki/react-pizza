import classes from './LoadingData.module.css';

import { SpinnerGap } from '@phosphor-icons/react';

const LoadingData = () => {
	return (
		<div className={classes.information}>
			<span className={classes.icon}>
				<SpinnerGap className={classes.icon} />
			</span>
		</div>
	);
};
export default LoadingData;
