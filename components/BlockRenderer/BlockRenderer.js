export const BlockRenderer = ({ blocks }) => {

    return blocks.map(block => {
        switch (block.name) {
            case "core/post-featured-image": {
                // return <div>core Cover</div>;
                return <div key={block.id}>core image</div>;
            }
            default:
                return null;
        }
    })

}