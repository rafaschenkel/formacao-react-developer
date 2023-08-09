import './styles.css';

function ItemList({ href, title, description }) {
    return (
        <div className="item-list">
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {title}
            </a>
            <p>{description}</p>
            <hr />
        </div>
    );
}

export default ItemList;
