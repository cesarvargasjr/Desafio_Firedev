const ResultSearch = ({ data }) => {
    if (!data || !data.length) return null;

    const resultList = data.map((titulos) => {
        return (
            <div>
                {titulos.attributes.titles.en_jp}
            </div>
        )
    })

    return (
        <div>
            {resultList}
        </div>
    )
}

export default ResultSearch;
