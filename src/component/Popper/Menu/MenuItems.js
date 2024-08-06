import Button from '~/component/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
  const classe = cx('menu-item', { separate: data.separate });
  return (
    <Button className={classe} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItems;
