import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
	return <div onClick={props.onCloseModal} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div>{props.children}</div>
		</div>
	);
};

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onCloseModal={props.onCloseModal} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;
