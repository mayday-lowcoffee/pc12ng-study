// Study-only checklist sequence transcribed from the user's one-page checklist.
// Each phase preserves the source order; POH notes are shown separately and never replace it.
(() => {
  const fallbackWhyEn = "The supplied checklist and POH list this check or setting, but do not state a separate reason for this individual item.";
  const fallbackWhyPt = "O checklist enviado e o POH listam esta verificação ou ajuste, mas não apresentam um motivo separado para este item.";
  const step = (en, pt, whyEn = fallbackWhyEn, whyPt = fallbackWhyPt, noteEn = "", notePt = "") => ({ en, pt, whyEn, whyPt, noteEn, notePt });

  const phases = [
    {
      id: "before_start", en: "BEFORE START", pt: "ANTES DA PARTIDA", ref: "POH Section 4.4, pp. 4-10–4-11", page: "Checklist p. 1; POH 4-10–4-11",
      steps: [
        step("MASTER POWER — ON", "MASTER POWER — LIGADO"),
        step("STAND BY BUS — ON", "STAND BY BUS — LIGADO", "The POH says to leave the standby bus on until the MFD powers up, about 30 seconds, before switching on the batteries.", "O POH orienta manter o standby bus ligado até o MFD inicializar, cerca de 30 segundos, antes de ligar as baterias."),
        step("EPS — TEST-ARMED/ON", "EPS — TESTAR/ARMAR/LIGAR", "The POH specifies an EPS test and arming sequence, then checks the EPS indications and ESIS alignment.", "O POH especifica uma sequência de teste e acionamento do EPS, seguida da conferência das indicações do EPS e do alinhamento do ESIS."),
        step("BATTERY 1/2 — ON · VOLTS 24 MIN", "BATTERY 1/2 — LIGADAS · MÍNIMO 24 V", "The POH requires both battery indications to show at least 24 VDC before departure.", "O POH exige que as indicações das duas baterias mostrem pelo menos 24 VCC antes da partida."),
        step("EXTERNAL POWER — AS REQUIRED", "ALIMENTAÇÃO EXTERNA — CONFORME NECESSÁRIO", "When external power is used, the POH calls for checking 28 VDC and the external-power availability indication.", "Quando se usa alimentação externa, o POH determina conferir 28 VCC e a indicação de disponibilidade da alimentação externa."),
        step("EXTERNAL LIGHTS — AS REQUIRED", "LUZES EXTERNAS — CONFORME NECESSÁRIO", "The POH cautions that prolonged beacon or logo-light use can reduce battery power and affect engine starting.", "O POH adverte que o uso prolongado das luzes beacon ou logo pode reduzir a carga da bateria e afetar a partida do motor."),
        step("BARO REF — SET", "REFERÊNCIA BAROMÉTRICA — AJUSTADA", "The POH calls for setting and cross-checking the barometric reference during climb and approach preparations.", "O POH determina ajustar e conferir a referência barométrica nos preparativos de subida e aproximação."),
        step("THR LEVER — IDLE", "THR LEVER — MARCHA LENTA"),
        step("CONDITION LEVER — CUT OFF", "CONDITION LEVER — CUTOFF"),
        step("PARKING BRAKE — ON", "FREIO DE ESTACIONAMENTO — ACIONADO"),
        step("FIRE WARM — CHECK", "FIRE WARN — VERIFICAR", "The POH calls for the FIRE WARN test and specifies that the engine-fire and fire-detector CAS annunciations appear during the test.", "O POH determina testar FIRE WARN e especifica que as indicações CAS Engine Fire e Fire Detector apareçam durante o teste.", "The uploaded checklist prints “FIRE WARM”; the POH uses “FIRE WARN”.", "O checklist enviado traz “FIRE WARM”; o POH usa “FIRE WARN”."),
        step("LAMP — CHECK", "LAMP — VERIFICAR", "Pressing LAMP should illuminate the master warning and caution lights, confirming those attention lights operate.", "Ao pressionar LAMP, as luzes Master Warning e Caution devem acender, confirmando o funcionamento dessas luzes de atenção."),
        step("FUEL PUMP — CHECK", "FUEL PUMP — VERIFICAR", "For the first flight of the day, the POH checks that the Fuel Pressure Low caution goes out when each pump is selected ON, then sets each pump to AUTO.", "No primeiro voo do dia, o POH verifica se a indicação Fuel Pressure Low apaga ao selecionar cada bomba em ON e, em seguida, seleciona cada uma em AUTO.")
      ]
    },
    {
      id: "clear_for_start", en: "CLEAR FOR START", pt: "LIBERADO PARA PARTIDA", ref: "POH Sections 4.4–4.5.1, pp. 4-10–4-12", page: "Checklist p. 1; POH 4-10–4-12",
      steps: [
        step("CLEARENCE — CHECK", "CLEARANCE — VERIFICAR", "The POH requires the ATIS and start-up clearance to be received before engine start.", "O POH exige receber o ATIS e a autorização de partida antes de acionar o motor.", "The source prints “CLEARENCE”.", "O arquivo traz a grafia “CLEARENCE”."),
        step("EXTERNAL LIGHTS — AS REQUIRED", "LUZES EXTERNAS — CONFORME NECESSÁRIO", "The POH cautions that prolonged beacon or logo-light use can reduce battery power and affect engine starting.", "O POH adverte que o uso prolongado das luzes beacon ou logo pode reduzir a carga da bateria e afetar a partida do motor."),
        step("PROP AREA — CLEAR", "ÁREA DA HÉLICE — LIVRE", "The POH requires the propeller area to be clear of obstructions before starting.", "O POH exige que a área da hélice esteja livre de obstáculos antes da partida."),
        step("START SWITCH — ON/PRESS > 2 SEC", "START SWITCH — ON/PRESSIONAR POR MAIS DE 2 S", "The supplied checklist states this timing, but the POH engine-start procedure says to push the STARTER switch momentarily. The difference is flagged here for verification against the approved checklist for this aircraft.", "O checklist enviado especifica esse tempo, mas o procedimento de partida do POH diz para pressionar momentaneamente o STARTER. A diferença fica sinalizada para conferência com o checklist aprovado desta aeronave.", "CHECKLIST/POH DIFFERENCE: checklist says >2 sec; POH Section 4.5.1 says “PUSH momentarily”. Confirm the approved aircraft-specific procedure.", "DIFERENÇA CHECKLIST/POH: o checklist diz >2 s; o POH, Seção 4.5.1, diz “PUSH momentarily”. Confirme o procedimento aprovado para esta aeronave.")
      ]
    },
    {
      id: "after_start", en: "AFTER START", pt: "APÓS A PARTIDA", ref: "POH Section 4.5.1, p. 4-13", page: "Checklist p. 1; POH 4-13",
      steps: [
        step("ENGINE INSTRUMENTS — CHECK", "INSTRUMENTOS DO MOTOR — VERIFICAR", "After the starter sequence, the POH requires engine instruments to be stable in the green range.", "Após a sequência do starter, o POH exige que os instrumentos do motor estejam estáveis na faixa verde."),
        step("GEN1/GEN2 (VOLTS/AMPS) — CHECK", "GEN1/GEN2 (VOLTS/AMPÈRES) — VERIFICAR", "The POH calls for checking generator volts and amps after start.", "O POH determina conferir volts e ampères dos geradores após a partida."),
        step("FUEL TOTALIZER — RESET", "FUEL TOTALIZER — REINICIALIZAR", "The POH calls for pressing the FUEL RESET soft key after engine start; it does not give a separate explanation for the checklist's “FUEL TOTALIZER” label.", "O POH determina pressionar FUEL RESET após a partida; não apresenta uma explicação separada para o rótulo “FUEL TOTALIZER” usado no checklist."),
        step("EXTERNAL POWER — DISCONNECTED", "ALIMENTAÇÃO EXTERNA — DESCONECTADA", "The POH directs disconnecting the external power unit after the engine-start sequence.", "O POH determina desconectar a unidade de alimentação externa após a sequência de partida.")
      ]
    },
    {
      id: "before_taxi", en: "BEFORE TAXI", pt: "ANTES DO TÁXI", ref: "POH Section 4.6, p. 4-15", page: "Checklist p. 1; POH 4-15",
      steps: [
        step("PUSHER — CHECK", "PUSHER — VERIFICAR", "The POH requires a preflight function test of the stall warning/stick-pusher system.", "O POH exige um teste funcional pré-voo do sistema de aviso de estol/stick pusher."),
        step("FLAPS — 15°", "FLAPS — 15°", "The POH lists 15° for the before-departure flap setting; it notes that 30° may be used for reduced takeoff distance.", "O POH lista 15° como ajuste dos flaps antes da partida; observa que 30° pode ser usado para reduzir a distância de decolagem."),
        step("PFD'S/MFD'S — CHECK/NO FLAGS", "PFD'S/MFD'S — VERIFICAR/SEM FLAGS", "The POH requires the PFD, MFD, CAS and ESIS to have no flags or red warning captions and to be aligned.", "O POH exige que PFD, MFD, CAS e ESIS não apresentem flags nem avisos vermelhos e estejam alinhados."),
        step("CAS — CHECK", "CAS — VERIFICAR", "The POH before-taxi procedure checks the CAS window and requires no cautions.", "O procedimento do POH antes do táxi manda conferir a janela CAS e exige ausência de cautions."),
        step("PROBES AND WINDSHIELD HEAT — TEST ON 1 MIN", "PROBES E AQUECIMENTO DO PARA-BRISA — TESTAR LIGADOS POR 1 MIN", "The checklist calls for a one-minute check of probe and windshield heat; the POH requires probe heat ON for line-up and windshield heat as required.", "O checklist determina verificar por um minuto o aquecimento das sondas e do para-brisa; o POH exige PROBES ON no alinhamento e windshield heat conforme necessário."),
        step("BRIEFING — CHECK", "BRIEFING — VERIFICAR", "The POH requires the departure and emergency briefing to be completed before takeoff.", "O POH exige concluir o briefing de partida e de emergência antes da decolagem.")
      ]
    },
    {
      id: "taxi", en: "TAXI", pt: "TÁXI", ref: "POH Section 4.7, p. 4-16; Section 4.8.1, p. 4-17", page: "Checklist p. 1; POH 4-16–4-17",
      steps: [
        step("REVERSE — CHECK", "REVERSE — VERIFICAR", "The POH taxi procedure checks that beta is available and returns the PCL to IDLE; when conditions allow, beta can control taxi speed and reduce brake wear.", "O procedimento de táxi do POH verifica a disponibilidade de beta e retorna o PCL a IDLE; quando as condições permitem, beta pode controlar a velocidade de táxi e reduzir o desgaste dos freios.", "The POH describes checking beta availability; the uploaded checklist labels this “REVERSE”.", "O POH descreve verificar a disponibilidade de beta; o checklist enviado chama o item de “REVERSE”."),
        step("BRAKES — CHECK", "FREIOS — VERIFICAR", "The POH includes a brake check during taxi before departure.", "O POH inclui uma verificação dos freios durante o táxi antes da partida."),
        step("TRIM — CHECK/GREEN RANGE", "TRIM — VERIFICAR/FAIXA VERDE", "The POH requires trim in the green range before departure; it specifies the green diamond for the stated aft-CG condition.", "O POH exige trim na faixa verde antes da partida; especifica o losango verde para a condição indicada de CG traseiro."),
        step("FLIGHT CONTROLS — CHECK", "CONTROLES DE VOO — VERIFICAR", "The POH before-departure check calls for full, free and correct flight-control movement.", "A verificação do POH antes da partida exige movimento completo, livre e correto dos controles de voo."),
        step("GLARSHILD — CHECK", "GLARESHIELD — VERIFICAR", "The supplied checklist names this inspection, but the POH does not state a separate reason for this individual item.", "O checklist enviado inclui esta inspeção, mas o POH não apresenta uma justificativa separada para este item.", "The source prints “GLARSHILD”.", "O arquivo traz a grafia “GLARSHILD”."),
        step("TRANSPONDER/TA — CHECK", "TRANSPONDER/TA — VERIFICAR"),
        step("PRESSURIZATION — CHECK", "PRESSURIZAÇÃO — VERIFICAR", "The POH requires the CPCS configuration and landing-field elevation to be checked before departure.", "O POH exige conferir a configuração do CPCS e a elevação do aeródromo de pouso antes da partida.")
      ]
    },
    {
      id: "cleared_takeoff", en: "CLEARED FOR TAKEOFF", pt: "LIBERADO PARA DECOLAGEM", ref: "POH Section 4.8.2, p. 4-17; Section 4.9, p. 4-18", page: "Checklist p. 1; POH 4-17–4-18",
      steps: [
        step("HEADINGS — CROSS CHECK", "PROAS — CONFERIR", "The POH line-up check requires the runway to be identified, heading verified and heading bug synchronized.", "A verificação de alinhamento do POH exige identificar a pista, verificar a proa e sincronizar o heading bug."),
        step("PROBES — ON", "PROBES — LIGADO", "The POH line-up check specifies PROBES ON.", "A verificação de alinhamento do POH especifica PROBES ON."),
        step("LIGHTS — ALL ON", "LUZES — TODAS LIGADAS"),
        step("GO AROW — CHECK", "GO AROUND — VERIFICAR", "The supplied checklist says to check this control. The POH describes pressing the Go Around switch during a balked landing if the autopilot is engaged; it does not define this checklist item as a switch press.", "O checklist enviado manda verificar este controle. O POH descreve pressionar Go Around durante uma arremetida se o piloto automático estiver engajado; não define este item como um comando de pressionar.", "The source prints “GO AROW”; the POH calls the related control “Go Around”.", "O arquivo traz “GO AROW”; o POH chama o controle relacionado de “Go Around”."),
        step("CONDITION LEVER — FLIGHT IDLE", "CONDITION LEVER — FLIGHT IDLE", "The POH line-up check specifies FLIGHT IDLE before takeoff.", "A verificação de alinhamento do POH especifica FLIGHT IDLE antes da decolagem."),
        step("TERR INHIB — CHECK", "TERR INHIB — VERIFICAR", "When TERR INHIB is active, the POH says terrain and aural alerts are deactivated; it is generally used when position accuracy is inadequate or the airport is not in the terrain database.", "Quando TERR INHIB está ativo, o POH informa que os alertas visuais e sonoros de terreno ficam desativados; em geral, é usado quando a precisão da posição é inadequada ou o aeródromo não está no banco de dados de terreno.", "“CHECK” does not mean to activate the inhibit; verify the intended state for the flight.", "“VERIFICAR” não significa ativar o inhibit; confira o estado pretendido para o voo."),
        step("BLEED AIR — AS REQUIRED", "BLEED AIR — CONFORME NECESSÁRIO", "The POH describes ACS BLEED AIR INHIBIT only under specified takeoff-power conditions; it is selected AUTO in climb if it was inhibited for takeoff.", "O POH prevê ACS BLEED AIR INHIBIT apenas nas condições especificadas de potência de decolagem; na subida, seleciona-se AUTO se o sistema foi inibido para a decolagem.")
      ]
    },
    {
      id: "after_takeoff", en: "AFTER TAKE OFF", pt: "APÓS A DECOLAGEM", ref: "POH Section 4.9, p. 4-18; Section 4.11, p. 4-21", page: "Checklist p. 1; POH 4-18, 4-21",
      steps: [
        step("LDG GEAR — UP", "TREM DE POUSO — RECOLHIDO", "The POH sequences landing-gear retraction after lift-off and a positive rate of climb.", "O POH determina recolher o trem após a decolagem e uma razão de subida positiva."),
        step("FLAPS — RETRACTED", "FLAPS — RECOLHIDOS", "The POH specifies FLAPS 0° above 100 KIAS after takeoff.", "O POH especifica FLAPS 0° acima de 100 KIAS após a decolagem."),
        step("YAW DAMPER — ON", "YAW DAMPER — LIGADO", "The POH selects the yaw damper ON after a positive rate of climb; its limitations require the yaw damper OFF during takeoff and landing.", "O POH seleciona o yaw damper ON após uma razão de subida positiva; as limitações exigem yaw damper OFF durante decolagem e pouso."),
        step("PRESSURIZATION — CHECK", "PRESSURIZAÇÃO — VERIFICAR", "The POH calls for monitoring cabin pressure during climb and cruise.", "O POH determina monitorar a pressão da cabine durante a subida e o cruzeiro."),
        step("LIGHTS — AS REQUIRED", "LUZES — CONFORME NECESSÁRIO"),
        step("BLEED AIR — ON", "BLEED AIR — LIGADO", "The POH climb procedure says ACS BLEED AIR AUTO if it was selected INHIBIT for takeoff.", "O procedimento de subida do POH diz ACS BLEED AIR AUTO se o sistema foi selecionado INHIBIT para a decolagem.", "CHECKLIST/POH DIFFERENCE: the checklist says ON; POH Section 4.11 says AUTO if inhibited for takeoff. Confirm the approved aircraft-specific procedure.", "DIFERENÇA CHECKLIST/POH: o checklist diz ON; o POH, Seção 4.11, diz AUTO se foi inibido na decolagem. Confirme o procedimento aprovado para esta aeronave.")
      ]
    },
    {
      id: "ten_thousand_climb", en: "TEN THOUSAND CLIMBING", pt: "SUBIDA A 10.000 FT", ref: "POH Sections 4.11 and 4.20, pp. 4-21 and 4-28", page: "Checklist p. 1; POH 4-21, 4-28",
      steps: [
        step("SEAT BELTS — AS REQUIRED", "CINTOS — CONFORME NECESSÁRIO"),
        step("LIGHTS — AS REQUIRED", "LUZES — CONFORME NECESSÁRIO"),
        step("OXYGEN — OPEN", "OXIGÊNIO — ABERTO", "The POH oxygen procedure requires the oxygen system and masks to be configured for the flight; above 10,000 ft it specifies the masks connected and the Oxygen Control Valve in AUTO.", "O procedimento de oxigênio do POH exige configurar o sistema e as máscaras para o voo; acima de 10.000 ft, especifica máscaras conectadas e Oxygen Control Valve em AUTO.", "The checklist says OPEN; POH Section 4.20 describes AUTO above 10,000 ft. Verify that these labels refer to the same control on this aircraft.", "O checklist diz OPEN; o POH, Seção 4.20, descreve AUTO acima de 10.000 ft. Confira se os dois rótulos se referem ao mesmo controle nesta aeronave."),
        step("INERT SEP — CLOSED", "INERT SEP — FECHADO", "The POH associates opening the inertial separator with icing, unprepared surfaces or bird-strike protection; it also notes that opening it reduces engine performance.", "O POH associa a abertura do separador inercial a gelo, superfícies não preparadas ou proteção contra impacto de aves; também informa que aberto reduz o desempenho do motor."),
        step("ALTIMETERS — CHECK STD", "ALTÍMETROS — CONFERIR STD")
      ]
    },
    {
      id: "cruise", en: "CRUISE", pt: "CRUZEIRO", ref: "POH Section 4.12, p. 4-21", page: "Checklist p. 1; POH 4-21",
      steps: [
        step("PRESSURIZATION — CHECK", "PRESSURIZAÇÃO — VERIFICAR", "The POH cruise procedure requires cabin pressurization to be monitored.", "O procedimento de cruzeiro do POH exige monitorar a pressurização da cabine."),
        step("ICE PROTECTION — AS REQUIRED", "PROTEÇÃO CONTRA GELO — CONFORME NECESSÁRIO", "The POH requires the ice-protection system to be operated as required by the conditions.", "O POH determina operar o sistema de proteção contra gelo conforme as condições exigirem.")
      ]
    },
    {
      id: "before_approach", en: "BEFORE APPROACH", pt: "ANTES DA APROXIMAÇÃO", ref: "POH Sections 4.13–4.14.1, p. 4-22", page: "Checklist p. 1; POH 4-22",
      steps: [
        step("BRIEFING — CONFIRMED", "BRIEFING — CONFIRMADO", "The POH descent and approach procedures call for receiving ATIS and performing the briefing.", "Os procedimentos de descida e aproximação do POH determinam receber o ATIS e realizar o briefing.")
      ]
    },
    {
      id: "ten_thousand_descent", en: "TEN THOUSAND DECENT", pt: "DESCIDA A 10.000 FT", ref: "POH Sections 4.13–4.14.1 and 4.20, pp. 4-22 and 4-28", page: "Checklist p. 1; POH 4-22, 4-28",
      steps: [
        step("ALTIMETERS — SET", "ALTÍMETROS — AJUSTAR", "The POH approach check requires the altimeter to be set.", "A verificação de aproximação do POH exige ajustar o altímetro."),
        step("ICE PROTECTION — SET", "PROTEÇÃO CONTRA GELO — AJUSTAR", "The POH requires the ice-protection configuration to match the conditions.", "O POH exige que a configuração de proteção contra gelo corresponda às condições."),
        step("MDA/DA — SET", "MDA/DA — AJUSTAR"),
        step("SEAT BELTS — ON", "CINTOS — AFIVELADOS"),
        step("OXYGEN — OFF", "OXIGÊNIO — DESLIGADO"),
        step("LIGHTS — AS REQUIRED", "LUZES — CONFORME NECESSÁRIO"),
        step("INERTIAL SEPARATOR — OPEN", "SEPARADOR INERCIAL — ABERTO", "The POH approach check calls for the inertial separator OPEN when operating on an unprepared surface or for bird-strike protection; the systems description explains that it bypasses heavy particles away from the engine.", "A verificação de aproximação do POH prevê o separador inercial OPEN ao operar em superfície não preparada ou para proteção contra impacto de aves; a descrição do sistema explica que ele desvia partículas pesadas para longe do motor.", "The POH makes OPEN conditional in the approach check; the supplied checklist lists it in this phase. Confirm applicability for the flight.", "Na verificação de aproximação, o POH condiciona a seleção OPEN; o checklist enviado a lista nesta fase. Confirme a aplicabilidade ao voo."),
        step("TERR INHIB — AS REQUIRED", "TERR INHIB — CONFORME NECESSÁRIO", "When TERR INHIB is active, terrain and aural alerts are deactivated; the POH limits its general use to situations such as inadequate position accuracy or airports missing from the terrain database.", "Quando TERR INHIB está ativo, os alertas visuais e sonoros de terreno ficam desativados; o POH restringe seu uso geral a situações como precisão inadequada da posição ou aeródromos ausentes do banco de terreno.")
      ]
    },
    {
      id: "final", en: "FINAL", pt: "FINAL", ref: "POH Section 4.14.2, p. 4-23; Limitations, cabin pressure", page: "Checklist p. 1; POH 4-23; Section 2",
      steps: [
        step("LANDING GEAR — DOWN (3 GREEN)", "TREM DE POUSO — BAIXADO (3 LUZES VERDES)", "The three green lights confirm the landing-gear down indication specified by the POH final check.", "As três luzes verdes confirmam a indicação de trem baixado especificada na verificação final do POH."),
        step("FLAPS — AS REQUIRED", "FLAPS — CONFORME NECESSÁRIO", "The POH final check specifies 40° or as required, subject to the stated icing and failure limits.", "A verificação final do POH especifica 40° ou conforme necessário, sujeito aos limites indicados para gelo e falhas."),
        step("CABIN DIFFERENTIAL — < 0.7", "DIFERENCIAL DA CABINE — < 0,7", "The POH approves pressurized landing only up to 0.7 psid and calls for decreasing cabin differential pressure before landing.", "O POH aprova pouso pressurizado somente até 0,7 psid e exige que o diferencial de pressão da cabine esteja diminuindo antes do pouso."),
        step("YAW DAMPER — DISENGAGED", "YAW DAMPER — DESENGAJADO", "The POH limitations require the yaw damper OFF during landing; the final checklist also calls for it disengaged before landing.", "As limitações do POH exigem yaw damper OFF durante o pouso; a lista final também determina desengajá-lo antes de pousar."),
        step("LIGHTS — ALL ON", "LUZES — TODAS LIGADAS")
      ]
    },
    {
      id: "after_landing", en: "AFTER LANDING", pt: "APÓS O POUSO", ref: "POH Sections 4.16–4.17, pp. 4-25", page: "Checklist p. 1; POH 4-25",
      steps: [
        step("GROUND IDLE — SET", "GROUND IDLE — AJUSTAR", "The POH defines GROUND IDLE for ground operation and says it keeps propeller speed above the prohibited 350–950 rpm range under the specified ambient conditions.", "O POH define GROUND IDLE para operação no solo e informa que mantém a rotação da hélice acima da faixa proibida de 350–950 rpm nas condições de temperatura especificadas."),
        step("FLAPS — AS REQUIRED", "FLAPS — CONFORME NECESSÁRIO", "The supplied checklist gives this setting as required; the POH after-landing checklist says Flaps UP when the runway is vacated.", "O checklist enviado deixa o ajuste conforme necessário; a lista do POH após o pouso diz Flaps UP depois de livrar a pista.", "CHECKLIST/POH DIFFERENCE: checklist says AS REQUIRED; POH Section 4.17 says UP when the runway is vacated.", "DIFERENÇA CHECKLIST/POH: o checklist diz AS REQUIRED; o POH, Seção 4.17, diz UP ao livrar a pista."),
        step("RADAR — STBY", "RADAR — STBY", "The POH places the weather radar in STBY after landing; its ground-operation limitation warns about personnel within 15 ft of the forward antenna sector.", "O POH coloca o radar meteorológico em STBY após o pouso; sua limitação em solo alerta sobre pessoas a menos de 15 ft do setor dianteiro da antena."),
        step("TRANSPONDER — GROUND", "TRANSPONDER — GROUND", "The POH after-landing procedure says STBY or check GND; this checklist specifies GROUND.", "O procedimento do POH após o pouso diz STBY ou verificar GND; este checklist especifica GROUND."),
        step("ICE PROTECTION — OFF", "PROTEÇÃO CONTRA GELO — OFF", "The POH after-landing procedure calls for ice-protection switches OFF or as required.", "O procedimento do POH após o pouso determina ICE PROTECTION OFF ou conforme necessário."),
        step("TRIM — RESET", "TRIM — REINICIALIZAR", "The POH after-landing checklist returns trim to the green range.", "A lista do POH após o pouso retorna o trim à faixa verde.")
      ]
    },
    {
      id: "shutdown", en: "SHUTDOWN", pt: "DESLIGAMENTO", ref: "POH Sections 4.18–4.19, pp. 4-26–4-27", page: "Checklist p. 1; POH 4-26–4-27",
      steps: [
        step("CONDITION LEVER — CUTOFF", "CONDITION LEVER — CUTOFF", "The POH shutdown procedure selects CONDITION LEVER CUT-OFF/FEATHER to shut down the engine.", "O procedimento de desligamento do POH seleciona CONDITION LEVER CUT-OFF/FEATHER para desligar o motor."),
        step("STANDBY BUS — OFF", "STANDBY BUS — OFF", "The POH shutdown sequence switches the standby bus off before the EPS and battery switches.", "A sequência de desligamento do POH desliga o standby bus antes do EPS e das baterias."),
        step("EPS — OFF", "EPS — OFF", "The POH shutdown sequence switches the EPS off after the standby bus.", "A sequência de desligamento do POH desliga o EPS depois do standby bus."),
        step("BATTERY 1/2 — OFF", "BATTERY 1/2 — OFF", "The POH shutdown sequence switches both batteries off after the standby bus and EPS.", "A sequência de desligamento do POH desliga as duas baterias após o standby bus e o EPS."),
        step("FLIGHT CONTROL LOCK — INSTALL", "TRAVA DOS CONTROLES DE VOO — INSTALAR", "The POH parking procedure requires the flight-control lock installed while parked.", "O procedimento de estacionamento do POH exige instalar a trava dos controles de voo enquanto a aeronave estiver estacionada."),
        step("MASTER POWER — OFF", "MASTER POWER — OFF", "This item is present in the supplied checklist. The POH shutdown sequence lists standby bus, EPS and battery switches OFF but does not give a separate Master Power OFF step in Section 4.18.", "Este item aparece no checklist enviado. A sequência de desligamento do POH lista standby bus, EPS e baterias OFF, mas não traz uma etapa separada de Master Power OFF na Seção 4.18.", "The supplied checklist includes this additional step; the POH shutdown section does not list it separately.", "O checklist enviado inclui esta etapa adicional; a seção de desligamento do POH não a lista separadamente.")
      ]
    }
  ];

  function makeQuestion(phase, stepIndex) {
    const current = phase.steps[stepIndex];
    const previous = phase.steps[stepIndex - 1];
    const allCandidates = phase.steps
      .filter((candidate, index) => index !== stepIndex && candidate.en !== current.en)
      .concat(phases.flatMap(other => other.steps).filter(candidate => candidate.en !== current.en));
    const distractors = [];
    for (const candidate of allCandidates) {
      if (!distractors.some(item => item.en === candidate.en)) distractors.push(candidate);
      if (distractors.length === 3) break;
    }
    const choices = [current, ...distractors];
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    const question = previous
      ? `In ${phase.en}, what checklist item comes after “${previous.en}”?`
      : `What is the first checklist item in ${phase.en}?`;
    const questionPt = previous
      ? `Em ${phase.pt}, qual item vem depois de “${previous.pt}”?`
      : `Qual é o primeiro item do checklist em ${phase.pt}?`;
    const note = current.noteEn ? ` ${current.noteEn}` : "";
    const notePt = current.notePt ? ` ${current.notePt}` : "";
    return {
      id: 3000 + phases.indexOf(phase) * 100 + stepIndex,
      pohVerified: false,
      manual: "Checklist Pilatus PC12 NG (arquivo enviado) + PC-12/47E POH",
      revision: "Checklist revision not stated",
      category: "CHECKLIST",
      difficulty: previous ? "MEDIUM" : "EASY",
      question,
      answers: choices.map(choice => choice.en),
      correct: choices.indexOf(current),
      explanation: `${current.en}. ${current.whyEn}${note}`,
      memoryAid: `${phase.en}: ${stepIndex + 1}/${phase.steps.length}`,
      reference: `Checklist PDF, page 1; ${phase.ref}`,
      sourcePage: phase.page,
      sourceTopic: phase.en,
      sourceSubtopic: `Checklist step ${stepIndex + 1}`,
      sourceText: current.en,
      factId: `CHECKLIST_${phase.id.toUpperCase()}_${String(stepIndex + 1).padStart(2, "0")}`,
      conceptId: `CHECKLIST_SEQUENCE_${phase.id.toUpperCase()}`,
      questionPt,
      answersPt: choices.map(choice => choice.pt),
      explanationPt: `${current.pt}. ${current.whyPt}${notePt}`
    };
  }

  window.checklistPhases = phases;
  window.buildChecklistQuestions = (phaseId = "ALL") => phases
    .filter(phase => phaseId === "ALL" || phase.id === phaseId)
    .flatMap(phase => phase.steps.map((_, index) => makeQuestion(phase, index)));
})();
