export default () => {
    const container = document.createElement("div");

    container.innerHTML = `
    <table class="tg">
    <thead>
  <tr>
    <th class="tg-0pky">Número</th>
    <th class="tg-0pky">Nome</th>
    <th class="tg-0pky">Partido</th>
    <th class="tg-0pky">% votos</th>
    <th class="tg-0pky">Foto</th>
  </tr>
    </thead>
    <tbody>
  <tr>
    <td class="tg-0pky">12</td>
    <td class="tg-0pky">CIRO FERREIRA GOMES</td>
    <td class="tg-0pky">PDT</td>
    <td class="tg-0pky">3,04%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/CIRO%20FERREIRA%20GOMES.jpg"></td>
  </tr>
  <tr>
    <td class="tg-0pky">22</td>
    <td class="tg-0pky">JAIR MESSIAS BOLSONARO</td>
    <td class="tg-0pky">PL</td>
    <td class="tg-0pky">43,20%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/JAIR%20MESSIAS%20BOLSONARO.jpeg"></td></td>
  </tr>
  <tr>
    <td class="tg-0pky">27</td>
    <td class="tg-0pky">JOSE MARIA EYMAEL</td>
    <td class="tg-0pky">DC</td>
    <td class="tg-0pky">0,01%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/JOSE%20MARIA%20EYMAEL.jpeg"></td></td>
  </tr>
    <tr>
    <td class="tg-0pky">14</td>
    <td class="tg-0pky">KELMON LUIS DA SILVA SOUZA</td>
    <td class="tg-0pky">PTB</td>
    <td class="tg-0pky">0,07%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/KELMON%20LUIS%20DA%20SILVA%20SOUZA.jpeg"></td></td>
  </tr>
    <tr>
    <td class="tg-0pky">80</td>
    <td class="tg-0pky">LEONARDO PÉRICLES VIEIRA ROQUE</td>
    <td class="tg-0pky">UP</td>
    <td class="tg-0pky">0,05%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/LEONARDO%20PÉRICLES%20VIEIRA%20ROQUE.jpg"></td></td>
  </tr>
    <tr>
    <td class="tg-0pky">30</td>
    <td class="tg-0pky">LUIZ FELIPE CHAVES D'AVILA</td>
    <td class="tg-0pky">NOVO</td>
    <td class="tg-0pky">0,47%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/LUIZ%20FELIPE%20CHAVES%20D'AVILA.jpg"></td></td>
  </tr>
    <tr>
    <td class="tg-0pky">13</td>
    <td class="tg-0pky">LUIZ INÁCIO LULA DA SILVA</td>
    <td class="tg-0pky">PT</td>
    <td class="tg-0pky">48,43%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/LUIZ%20INÁCIO%20LULA%20DA%20SILVA.jpg"></td></td>
  </tr>
    <tr>
    <td class="tg-0pky">15</td>
    <td class="tg-0pky">SIMONE NASSAR TEBET</td>
    <td class="tg-0pky">MDB</td>
    <td class="tg-0pky">4,16%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/SIMONE%20NASSAR%20TEBET.jpg"></td></td>
  </tr>
    <tr>
    <td class="tg-0pky">21</td>
    <td class="tg-0pky">SOFIA PADUA MANZANO</td>
    <td class="tg-0pky">PCB</td>
    <td class="tg-0pky">0,04%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/SOFIA%20MANZANO.jpeg"></td></td>
    <tr>
    <td class="tg-0pky">44</td>
    <td class="tg-0pky">SORAYA VIEIRA THRONICKE</td>
    <td class="tg-0pky">PCB</td>
    <td class="tg-0pky">0,51%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/SORAYA%20VIEIRA%20THRONICKE.jpg"></td></td>
  </tr>
    </tr>
    <tr>
    <td class="tg-0pky">16</td>
    <td class="tg-0pky">VERA LUCIA PEREIRA DA SILVA SALGADO</td>
    <td class="tg-0pky">PSTU</td>
    <td class="tg-0pky">0,02%</td>
    <td class="tg-1pky"><img id="imagem" src="../img/VERA%20LUCIA%20PEREIRA%20DA%20SILVA%20SALGADO.jpg"></td></td>
  </tr>
</tbody>
</table>
    `;

    return container;
}