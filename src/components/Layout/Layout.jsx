import styles from './styles/Layout.module.scss';

import Proptypes from 'prop-types';

const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Layout.proptype = {
    children: Proptypes.element.isRequired
}

export default Layout;
