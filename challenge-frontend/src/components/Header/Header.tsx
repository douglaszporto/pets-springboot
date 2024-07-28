import * as Tags from './Header.styles';

interface HeaderProps {
    onAddNew?: () => void;
}

const Header:React.FC<HeaderProps> = ({onAddNew}:HeaderProps) => {

    const handleClick = () => {
        onAddNew && onAddNew();
    }

    return (
        <Tags.Header>
            <Tags.Group>
                <Tags.Logo src="/logo.svg" alt="logo" />
                <Tags.Title>Pets Platform</Tags.Title>
            </Tags.Group>
            {onAddNew ? <Tags.Button onClick={handleClick}>Add New</Tags.Button> : null}
        </Tags.Header>
    );
}

export default Header;