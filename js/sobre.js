export default () => {
    const container = document.createElement("div");

    container.innerHTML = `
    <h1>Sobre as Eleições</h1>
    <p>Eleição é todo processo pelo qual um grupo designa um ou mais de um de seus integrantes para
     ocupar um cargo por meio de votação. Na democracia representativa, é o processo que consiste na 
     escolha de determinados indivíduos para exercerem o poder soberano, concedido pelo povo através do voto, 
     devendo estes, assim, exercerem o papel de representantes da nação. A eleição pode se processar com o voto de toda a 
     comunidade (sufrágio universal) ou de apenas uma parcela da comunidade, isto é, grupos restritos de pessoas que preencham 
     certos requisitos económicos, sociais e culturais (sufrágio restrito). As pessoas com direito de voto (ou sufrágio) são os eleitores.</p>
`;

    return container;
}