var signo = prompt('¿Cuál es tu signo?').toLocaleUpperCase();

console.log(signo);

switch (signo) {
  case 'ARIES':
    alert('Podrá sentirse algo inhibido si le pidieran hablar en público. Deberá aclarar sus pensamientos antes de expresarlos. Excelente para compras.');
    break;
  case 'TAURO':
    alert('Disfrutará haciendo compras para su hogar y familia. Sus  preocupaciones personales le impedirán ver las necesidades de un amigo. Trate de prestar atención.');
    break;
  case 'GEMINIS' || 'GÉMINIS':
    alert('Sus ideas innovadoras le reportarán éxitos en lo laboral. Aunque este es un periodo de ganancias, surgirán discusiones sobre dinero. Piense con lógica.');
    break;
  case 'CÁNCER' || 'CANCER':
    alert('Estará inspirado y podrá interesarle lo intelectual y lo metafísico. En el amor necesidad de apoyarse mutuamente. Muéstrese positivo en lo personal.');
    break;
  case 'LEO':
    alert('Trate de no mostrarse tan crítico de un niño. Posibilidad de encontrar el amor en el ámbito del trabajo. Oportunidad de viajar. Un amigo le dará suerte.');
    break;
  case 'VIRGO':
    alert('No permita que detalles le pongan de mal humor por la mañana. Oportunidad de mejorar su suerte. Los lazos afectivos se fortalecerán. Armonía en el hogar.');
    break;
  case 'LIBRA':
    alert('Posibilidad de más viajes de fin de semana pronto. Se sentirá de muy buen humor, pero podrá cambiar de planes. No permita que esto lo ponga nervioso.')
    break;
  case 'ESCORPION':
    alert('Algunas adquisiciones le colmarán de alegría en las próximas semanas. Inesperada visita de amigos. Evite mostrarse autoritario con familiares.')
    break;
  case 'SAGITARIO':
    alert('En lo concerniente a asuntos laborales caminará sobre base firme. Las conversaciones con amigos resultarán estimulantes. Evite gastar demasiado.')
    break;
  case 'CAPRICORNIO':
    alert('Entrará en un período muy romántico y podrá hacer anuncios de compromiso. En el plano laboral lo mejor será mantenerse dentro de la lógica.')
    break;
  case 'ACUARIO':
    alert('Debe evitar mostrarse descuidado con el dinero y ser prudente en sus tratos financieros. Esté alerta para no ser presa de quienes quieran sacar provecho.')
    break;
  case 'PISIS':
    alert('Posible desentendimiento con un allegado. Evite gastar en forma extravagante y deje para más adelante decisiones financieras importantes');
    break;
  case '4 SEPTIEMBRE' || '4 DE SEPTIEMBRE':
    alert('Es una persona que está constantemente en movimiento. Sin algo que le mantenga ocupado puede llegar a deprimirse. Posee buen sentido para los negocios y también sabe convertir su potencial artístico en una actividad lucrativa. Desde muy joven tiene tendencia a ser algo avaro. Una vez que puede equilibrar la economía con los gastos, por lo general se convierte en una persona más feliz.');
    break;
  default:
    alert(`OPCIONES VALIDAS:
        ARIES, TAURO, GÉMINIS, CÁNCER, LEO, VIRGO, LIBRA, ESCORPION, SAGITARIO,
        CAPRICORNIO, ACUARIO, PISCIS, 4 DE SEPTIEMBRE
    `);
    break;
}