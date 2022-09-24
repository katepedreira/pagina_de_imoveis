import React, { useEffect, useState } from "react";
import { getImoveis } from "../../services/imovelApiService";
import ImovelCard from "../../components/ImovelCard";
import "./ImoveisPage.css";
import {useNavigate} from "react-router-dom";

function ImoveisPage() {
    const navigate = useNavigate();
    const [listaImoveis, setListaImoveis] = useState([])

    useEffect(() => {
        getImoveis().then((data) => {
            setListaImoveis(data)
        });   
    }, []);
    // O array vazio no useEffect indica que somente deve ser executado uma vez

    function irParaDetalhe(id) {
        navigate(`/imoveis/${id}`);
    }

    return (
        <div className="listaImoveis">
            <h1>Página de Imóveis</h1>
            <div>
                {listaImoveis.map((item, i) =>
                    <div onClick={() => irParaDetalhe(item.id)} key={i} className="listaImoveis__imovelCard">
                        <ImovelCard imovel={item} />
                    </div>
                )}
            </div>
        </div>
    );
}
export default ImoveisPage;