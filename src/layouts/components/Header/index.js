import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

import config from '~/config';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/asset/images';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image';
import { MessageIcons, MailboxIcons, UploadIcons } from '~/component/Icons';
import Search from '~/component/Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Việt Nam',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const currentUser = true;

  // handle Menu Change
  const handleMenuChange = (menuItem) => {
    // switch (menuItem.type) {
    //   case 'language':
    //    handle:
    //    default:
    // }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/getcoins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>
        <Search />

        <div className={cx('active')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Tải lên">
                <button className={cx('action-btn')}>
                  <UploadIcons />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Tin nhắn">
                <button className={cx('action-btn')}>
                  <MessageIcons />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Hộp thư">
                <button className={cx('action-btn')}>
                  <MailboxIcons />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('action-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9937eff1caca20dbf3a6a7acaabc3c06.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&nonce=39642&refresh_token=004614d8c87ef6b5b906558476464950&shcp=-&shp=30310797&x-expires=1722567600&x-signature=h544fpgsPBxJds9B%2BD7m8O5uM0g%3D"
                alt="img"
                fallback="	https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
