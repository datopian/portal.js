import React from 'react';

/**
 * ReadMe component displays the markdown description of a datapackage
 * @param {string} readme parsed html of data package readme
 * @returns React Component
 */
const ReadMe = ({ readmeHtml }) => {
    return (
        <>
            <section className="m-8" name="sample-table">
                <h1 className="text-2xl font-bold mb-4">README</h1>
                <div className="prose">
                    <div dangerouslySetInnerHTML={{ __html: readmeHtml }} />
                </div>
            </section>
        </>
    )
}

export default ReadMe