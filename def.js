const matrix = document.getElementById("svg5")
// menu
const sound = document.getElementById("tspan24008")
const setting = document.getElementById("tspan24003")
const pm = document.getElementById("tspan23919")
const beep = document.getElementById("path23520")
//station-service
//______GAS
const gas = document.getElementById("rect20241")
//______car_filling_gas
const car_gas = document.getElementById("path18053")
//gameover
const gameover = document.getElementById("path22992")
//time_separator
const time_separator = document.getElementById("rect23787-7")

//______station_service_001
const gas_001 = document.getElementById("g20687")
const gas_001_a = document.getElementById("path20677")
const gas_001_b = document.getElementById("path20679")
const gas_001_c = document.getElementById("path20683")
const gas_001_d = document.getElementById("path20685")
const gas_001_e = document.getElementById("path20679-3-6")
const gas_001_f = document.getElementById("path20679-3")
const gas_001_g = document.getElementById("path20681")
//______station_service_010
const gas_010 = document.getElementById("layer5")
const gas_010_a = document.getElementById("path20534-6")
const gas_010_b = document.getElementById("path20599-8")
const gas_010_c = document.getElementById("path20603-4")
const gas_010_d = document.getElementById("path20605-3")
const gas_010_e = document.getElementById("path20679-3-6-7")
const gas_010_f = document.getElementById("path20679-3-5")
const gas_010_g = document.getElementById("path20601-8")
//______station_service_100
const gas_100 = document.getElementById("layer6")
const gas_100_a = document.getElementById("path20534")
const gas_100_b = document.getElementById("path20599")
const gas_100_c = document.getElementById("path20603")
const gas_100_d = document.getElementById("path20605")
const gas_100_e = document.getElementById("path20679-3-6-7-2")
const gas_100_f = document.getElementById("path20679-3-5-6")
const gas_100_g = document.getElementById("path20601")
//woman
const woman = document.getElementById("layer13")
const woman1 = document.getElementById("path8339-3-6")
const woman2 = document.getElementById("path8339-3")
const woman3 = document.getElementById("path7770-0")
const woman4 = document.getElementById("path7770")
const woman5 = document.getElementById("path8339")
//dog
const dog = document.getElementById("layer12")
const dog1 = document.getElementById("path8473-0-2-6")
const dog2 = document.getElementById("path8473-0-2")
const dog3 = document.getElementById("path8473-0")
const dog4 = document.getElementById("path8473")
//panneau
const panneau = document.getElementById("layer11")
const panneau1 = document.getElementById("path11746-3-1-9")
const panneau2 = document.getElementById("path11746-3-1")
const panneau3 = document.getElementById("path11746-3")
const panneau4 = document.getElementById("path11746")
//rondin
const rondin = document.getElementById("layer10")
const rondin1 = document.getElementById("path14001-7-4")
const rondin2 = document.getElementById("path14001-7-8")
const rondin3 = document.getElementById("path14001-7")
const rondin4 = document.getElementById("path14001")
//arret
const arret = document.getElementById("layer9")
const arret1 = document.getElementById("path17041-5-0-3")
const arret2 = document.getElementById("path17041-5-0")
const arret3 = document.getElementById("path17041-5")
const arret4 = document.getElementById("path17041")
//line
const line = document.getElementById("layer17")
const line_L1 = document.getElementById("path366")
const line_L2 = document.getElementById("path364")
const line_L3 = document.getElementById("path362")
const line_L4 = document.getElementById("path360")
const line_L5 = document.getElementById("path309")
const line_R1 = document.getElementById("path1244")
const line_R2 = document.getElementById("path1242")
const line_R3 = document.getElementById("path1240")
const line_R4 = document.getElementById("path498")
const line_R5 = document.getElementById("path496")
//taxi
const taxi = document.getElementById("layer16")
const taxi1 = document.getElementById("path3151")
const taxi2 = document.getElementById("path3151-3")
const taxi3 = document.getElementById("path3151-5")
const taxi4 = document.getElementById("path3151-6")
const taxi5 = document.getElementById("path3151-2")
//passagere
const passagere = document.getElementById("layer15")
const passagere1 = document.getElementById("path335")
const passagere2 = document.getElementById("path335-9")
const passagere3 = document.getElementById("path335-9-1")
const passagere4 = document.getElementById("path335-9-2")
const passagere5 = document.getElementById("path335-9-7")
//accident
const accident = document.getElementById("layer14")
const accident1 = document.getElementById("path3506")
const accident2 = document.getElementById("path7351")
const accident3 = document.getElementById("path7353")
//accident
const etat = document.getElementById("layer19")
const ok = document.getElementById("path23030")
const bof = document.getElementById("path23030-9")
const ko = document.getElementById("path23213")

//score 10000
const score_10000_a = document.getElementById("path23718")
const score_10000_b = document.getElementById("path23720")
const score_10000_c = document.getElementById("path23722")
const score_10000_d = document.getElementById("path23730")
const score_10000_e = document.getElementById("path23726")
const score_10000_f = document.getElementById("path23724")
const score_10000_g = document.getElementById("path23728")
//score 1000
const score_1000_a = document.getElementById("path23702")
const score_1000_b = document.getElementById("path23704")
const score_1000_c = document.getElementById("path23706")
const score_1000_d = document.getElementById("path23714")
const score_1000_e = document.getElementById("path23710")
const score_1000_f = document.getElementById("path23708")
const score_1000_g = document.getElementById("path23712")
//score 100
const score_100_a = document.getElementById("path23686")
const score_100_b = document.getElementById("path23688")
const score_100_c = document.getElementById("path23690")
const score_100_d = document.getElementById("path23698")
const score_100_e = document.getElementById("path23694")
const score_100_f = document.getElementById("path23692")
const score_100_g = document.getElementById("path23696")
//score 10
const score_10_a = document.getElementById("path23601")
const score_10_b = document.getElementById("path23603")
const score_10_c = document.getElementById("path23605")
const score_10_d = document.getElementById("path23613")
const score_10_e = document.getElementById("path23609")
const score_10_f = document.getElementById("path23607")
const score_10_g = document.getElementById("path23611")
//score 1
const score_1_a = document.getElementById("path23587")
const score_1_b = document.getElementById("path23589")
const score_1_c = document.getElementById("path23591")
const score_1_d = document.getElementById("path23599")
const score_1_e = document.getElementById("path23595")
const score_1_f = document.getElementById("path23593")
const score_1_g = document.getElementById("path23597")













