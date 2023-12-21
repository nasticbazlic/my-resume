
import './Items.css';

const Items = ({title, children, variation}) => {
  return (
		<div className='items'>
			<h2 className={variation}>{title}</h2>
			<div className='items__info'>
				{children}
			</div>
		</div>
	)
}

export default Items;