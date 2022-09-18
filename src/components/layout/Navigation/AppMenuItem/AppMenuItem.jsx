import { Button, ListItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { LinkIcon } from '@chakra-ui/icons';

export const AppMenuItem = ( { onClick, label, href, icon } ) => {
    return (
        <ListItem>
            <Button
                w='full'
                variant='ghost'
                leftIcon={ icon }
                size='sm'
                justifyContent='left'
                rounded='0'
                as='a'
                href={ href }
                onClick={ onClick }>
                { label }
            </Button>
        </ListItem>
    )
}

AppMenuItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
}

AppMenuItem.defaultProps = {
    onClick: () => console.log('<AppMenuItem/> clicked'),
    label: 'Ir',
    href: '/',
    icon: <LinkIcon/>,
}