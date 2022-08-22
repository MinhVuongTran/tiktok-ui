import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive offset={[-14, 0]} delay={[800, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1660982400&x-signature=B4%2BFsPIrISNUSHPhMUh1uX0AKYw%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hoaa</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Đào Lê Phương Hoa</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
