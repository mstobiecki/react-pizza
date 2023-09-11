import classes from './LocationMap.module.css';

const LocationMap = () => {
	return (
		<iframe
			className={classes.location}
			src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6885.4505087871175!2d19.681937435520197!3d52.54747080815852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1694455264734!5m2!1spl!2spl'
			width='600'
			height='450'
			style={{ border: 0 }}
			allowfullscreen=''
			loading='lazy'
			referrerpolicy='no-referrer-when-downgrade'></iframe>
	);
};

export default LocationMap;
