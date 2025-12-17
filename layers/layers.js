var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TCOS_11_1 = new ol.format.GeoJSON();
var features_TCOS_11_1 = format_TCOS_11_1.readFeatures(json_TCOS_11_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_11_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_11_1.addFeatures(features_TCOS_11_1);
var lyr_TCOS_11_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_11_1, 
                style: style_TCOS_11_1,
                popuplayertitle: 'TCOS_11',
                interactive: true,
    title: 'TCOS_11<br />\
    <img src="styles/legend/TCOS_11_1_0.png" /> (Rancho Huapi) Asociacion de Comunidades Originarias e Indigenas de Ayllus y Markas de Poroma Asocoin - Poroma, Valle Quillacas Marka Pojpo y la Marka San Lucas Payacollo<br />\
    <img src="styles/legend/TCOS_11_1_1.png" /> Ayllo Chiro<br />\
    <img src="styles/legend/TCOS_11_1_2.png" /> AYLLU CARANJA TAPACARI<br />\
    <img src="styles/legend/TCOS_11_1_3.png" /> AYLLU CHAYANTAKA<br />\
    <img src="styles/legend/TCOS_11_1_4.png" /> AYLLU CHULLPA<br />\
    <img src="styles/legend/TCOS_11_1_5.png" /> Ayllu Chullpa - Charcas<br />\
    <img src="styles/legend/TCOS_11_1_6.png" /> Ayllu Coacari<br />\
    <img src="styles/legend/TCOS_11_1_7.png" /> AYLLU HUAYLLATIRI ARANSAYA<br />\
    <img src="styles/legend/TCOS_11_1_8.png" /> AYLLU JACHA SAQA KUYRPU<br />\
    <img src="styles/legend/TCOS_11_1_9.png" /> AYLLU JILANKO TAYAQUIRA<br />\
    <img src="styles/legend/TCOS_11_1_10.png" /> AYLLU JILAWI Y SULLKAWI MARKA CAÑADON VENTA Y MEDIA<br />\
    <img src="styles/legend/TCOS_11_1_11.png" /> AYLLU JUCUMANIS<br />\
    <img src="styles/legend/TCOS_11_1_12.png" /> Ayllu Karacha<br />\
    <img src="styles/legend/TCOS_11_1_13.png" /> AYLLU LAYMES - AYLLU PURACAS<br />\
    <img src="styles/legend/TCOS_11_1_14.png" /> AYLLU PALLI PALLI<br />\
    <img src="styles/legend/TCOS_11_1_15.png" /> Ayllu Panacachi<br />\
    <img src="styles/legend/TCOS_11_1_16.png" /> AYLLU PRIMERA CABEZA TAPACARI<br />\
    <img src="styles/legend/TCOS_11_1_17.png" /> Ayllu Qullana<br />\
    <img src="styles/legend/TCOS_11_1_18.png" /> AYLLU QURIPATA<br />\
    <img src="styles/legend/TCOS_11_1_19.png" /> AYLLU SEGUNDA TAPACARI<br />\
    <img src="styles/legend/TCOS_11_1_20.png" /> Ayllu Sikuya<br />\
    <img src="styles/legend/TCOS_11_1_21.png" /> Ayllu Sullca (Potosí)<br />\
    <img src="styles/legend/TCOS_11_1_22.png" /> Ayllu Sullka Jilatikani<br />\
    <img src="styles/legend/TCOS_11_1_23.png" /> Ayllu Takahuani<br />\
    <img src="styles/legend/TCOS_11_1_24.png" /> AYLLU TARACO TAPACARI Y AYLLU PAKAJI<br />\
    <img src="styles/legend/TCOS_11_1_25.png" /> AYLLU TARUCAMARCA ARANSAYA<br />\
    <img src="styles/legend/TCOS_11_1_26.png" /> Ayllu Uma Uma<br />\
    <img src="styles/legend/TCOS_11_1_27.png" /> Ayllu Urinsaya - Urinsaya<br />\
    <img src="styles/legend/TCOS_11_1_28.png" /> AYLLU VILUYO<br />\
    <img src="styles/legend/TCOS_11_1_29.png" /> AYLLUS ORIGINARIOS DE LA MARKA EL CHORO (CHURU)<br />\
    <img src="styles/legend/TCOS_11_1_30.png" /> Central Regional Sindical Unica de Campesinos Indígenas de Raqaypampa<br />\
    <img src="styles/legend/TCOS_11_1_31.png" /> COMUNIDAD ACO ACO<br />\
    <img src="styles/legend/TCOS_11_1_32.png" /> COMUNIDAD CEBADA MAYU<br />\
    <img src="styles/legend/TCOS_11_1_33.png" /> COMUNIDAD CHACARA COMUNIDAD PANTI PATA<br />\
    <img src="styles/legend/TCOS_11_1_34.png" /> COMUNIDAD CUIRI TEJA MOLINO<br />\
    <img src="styles/legend/TCOS_11_1_35.png" /> COMUNIDAD DE REALENGA<br />\
    <img src="styles/legend/TCOS_11_1_36.png" /> COMUNIDAD OCURI AGRARIO<br />\
    <img src="styles/legend/TCOS_11_1_37.png" /> CONSEJO DE AUTORIDADES ORIGINARIAS DE CHALLACOLLO MARKA CAOCHMA<br />\
    <img src="styles/legend/TCOS_11_1_38.png" /> Jatun Ayllu Urinsaya Sak\'ani Alto Leqe<br />\
    <img src="styles/legend/TCOS_11_1_39.png" /> Jucumanis - Ayllus en Paz<br />\
    <img src="styles/legend/TCOS_11_1_40.png" /> KAWILTU ORIGINARIO IRUNCIATA<br />\
    <img src="styles/legend/TCOS_11_1_41.png" /> MUNICIPIO DE SACACA<br />\
    <img src="styles/legend/TCOS_11_1_42.png" /> O.T.B. ASOC. COM. AYLLU SULLK\'A URINSAYA<br />\
    <img src="styles/legend/TCOS_11_1_43.png" /> ORGANIZACION ORIGINARIA AYLLU BOMBO<br />\
    <img src="styles/legend/TCOS_11_1_44.png" /> Pueblo Indígena Originario AYLLU QHEWIÑAL<br />\
    <img src="styles/legend/TCOS_11_1_45.png" /> PUEBLO INDIGENA ORIGINARIO PABELLON<br />\
    <img src="styles/legend/TCOS_11_1_46.png" /> PUEBLOS INDIGENAS ORIGINARIOS MARKA QHARA QHARA<br />\
    <img src="styles/legend/TCOS_11_1_47.png" /> Saucari - CAOS<br />' });
var format_TCOS_10_2 = new ol.format.GeoJSON();
var features_TCOS_10_2 = format_TCOS_10_2.readFeatures(json_TCOS_10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_10_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_10_2.addFeatures(features_TCOS_10_2);
var lyr_TCOS_10_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_10_2, 
                style: style_TCOS_10_2,
                popuplayertitle: 'TCOS_10',
                interactive: true,
    title: 'TCOS_10<br />\
    <img src="styles/legend/TCOS_10_2_0.png" /> A pedido de parte SANSIM<br />\
    <img src="styles/legend/TCOS_10_2_1.png" /> ASOCIACION COMUNITARIA SUB CENTRAL ORIGINARIO CHALLA ARRIBA AYLLU ARANZAYA SECCION A<br />\
    <img src="styles/legend/TCOS_10_2_2.png" /> AYLLU AMSTA CHAYKINA<br />\
    <img src="styles/legend/TCOS_10_2_3.png" /> Ayllu Kirkiawi<br />\
    <img src="styles/legend/TCOS_10_2_4.png" /> Ayllu Majasaya Mujlli<br />\
    <img src="styles/legend/TCOS_10_2_5.png" /> COCHABAMBA DE OFICIO<br />\
    <img src="styles/legend/TCOS_10_2_6.png" /> COMUNIDAD CALA CALA<br />\
    <img src="styles/legend/TCOS_10_2_7.png" /> Comunidad Challa Grande<br />\
    <img src="styles/legend/TCOS_10_2_8.png" /> COMUNIDAD HABARA<br />\
    <img src="styles/legend/TCOS_10_2_9.png" /> COMUNIDAD HUAYÑA PASTO GRANDE<br />\
    <img src="styles/legend/TCOS_10_2_10.png" /> COMUNIDAD INDIGENA ORIGINARIA ANTAKAHUA JIRA JIRA<br />\
    <img src="styles/legend/TCOS_10_2_11.png" /> COMUNIDAD INDIGENA ORIGINARIA CHALLOMA<br />\
    <img src="styles/legend/TCOS_10_2_12.png" /> COMUNIDAD INDIGENA ORIGINARIA CHUÑU CHUÑUNI<br />\
    <img src="styles/legend/TCOS_10_2_13.png" /> COMUNIDAD INDIGENA ORIGINARIA HUAYLLAS<br />\
    <img src="styles/legend/TCOS_10_2_14.png" /> COMUNIDAD INDIGENA ORIGINARIA TALLIJA CONFITAL<br />\
    <img src="styles/legend/TCOS_10_2_15.png" /> COMUNIDAD INDIGENA ORIGINARIA YARVICOYA RODEO<br />\
    <img src="styles/legend/TCOS_10_2_16.png" /> COMUNIDAD ORIGINARIA DE YURUCHUCO<br />\
    <img src="styles/legend/TCOS_10_2_17.png" /> COMUNIDAD ORIGINARIA ROMEROCOTA<br />\
    <img src="styles/legend/TCOS_10_2_18.png" /> COMUNIDADES DE CHOJÑACOTA Y OTB "COMUNIDAD DE TOLAPALCA CHICO"<br />\
    <img src="styles/legend/TCOS_10_2_19.png" /> COMUNIDADES DE COLLPA Y HUALLATIRA<br />\
    <img src="styles/legend/TCOS_10_2_20.png" /> PUEBLO ORIGINARIO INDIGENA MARCA LEQUE<br />\
    <img src="styles/legend/TCOS_10_2_21.png" /> TIOC Lequepalca, Chacarilla, Cohani, Yarvicoya, Chullunquiani, Jancoyu, Totoroco y Cotuhuma<br />\
    <img src="styles/legend/TCOS_10_2_22.png" /> TOLAPALCA Y CALAHUAYLLA<br />' });
var format_TCOS_9_3 = new ol.format.GeoJSON();
var features_TCOS_9_3 = format_TCOS_9_3.readFeatures(json_TCOS_9_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_9_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_9_3.addFeatures(features_TCOS_9_3);
var lyr_TCOS_9_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_9_3, 
                style: style_TCOS_9_3,
                popuplayertitle: 'TCOS_9',
                interactive: true,
    title: 'TCOS_9<br />\
    <img src="styles/legend/TCOS_9_3_0.png" /> Ayllu Achirjiri<br />\
    <img src="styles/legend/TCOS_9_3_1.png" /> Ayllu Calla Arriba<br />\
    <img src="styles/legend/TCOS_9_3_2.png" /> Ayllu Cuipa<br />\
    <img src="styles/legend/TCOS_9_3_3.png" /> Ayllu Hucuri Milluni Ancohaqui<br />\
    <img src="styles/legend/TCOS_9_3_4.png" /> AYLLU ILAVI "AILAVI"<br />\
    <img src="styles/legend/TCOS_9_3_5.png" /> Ayllu Janq\'u Jaqi Abajo<br />\
    <img src="styles/legend/TCOS_9_3_6.png" /> Ayllu Khunkhu Liqui Liqui<br />\
    <img src="styles/legend/TCOS_9_3_7.png" /> AYLLU NINOCA BAJA POLIGONO N° 108<br />\
    <img src="styles/legend/TCOS_9_3_8.png" /> AYLLU ORIGINARIO ANACO<br />\
    <img src="styles/legend/TCOS_9_3_9.png" /> AYLLU ORIGINARIO HUATASCAPA<br />\
    <img src="styles/legend/TCOS_9_3_10.png" /> Ayllu Parina Arriba<br />\
    <img src="styles/legend/TCOS_9_3_11.png" /> Ayllu Parina Baja<br />\
    <img src="styles/legend/TCOS_9_3_12.png" /> Ayllu Qhunqhu Milluni<br />\
    <img src="styles/legend/TCOS_9_3_13.png" /> Ayllu Qurpa<br />\
    <img src="styles/legend/TCOS_9_3_14.png" /> Ayllu Sullkatiti Lahuacollu<br />\
    <img src="styles/legend/TCOS_9_3_15.png" /> Ayllu Sullkatiti Titiri<br />\
    <img src="styles/legend/TCOS_9_3_16.png" /> Ayllu Titicani Challaya San Pedro de Tana<br />\
    <img src="styles/legend/TCOS_9_3_17.png" /> Ayllu Titicani Takaka<br />\
    <img src="styles/legend/TCOS_9_3_18.png" /> Ayllu Titicani Tukari (Kupi)<br />\
    <img src="styles/legend/TCOS_9_3_19.png" /> Ayllu Yawriri<br />\
    <img src="styles/legend/TCOS_9_3_20.png" /> C. CANTON SAN ANDRES DE TOHOPOCO<br />\
    <img src="styles/legend/TCOS_9_3_21.png" /> COMUNIDAD CHACALTAYA EX HACIENDA ACHACHICALA<br />\
    <img src="styles/legend/TCOS_9_3_22.png" /> COMUNIDAD INDIGENA ORIGINARIA HUARCAMARCA<br />\
    <img src="styles/legend/TCOS_9_3_23.png" /> COMUNIDAD INDIGENA ORIGINARIA MILLUNI<br />\
    <img src="styles/legend/TCOS_9_3_24.png" /> COMUNIDAD INDIGENA ORIGINARIO TOCORAYA<br />\
    <img src="styles/legend/TCOS_9_3_25.png" /> COMUNIDAD JAILLIHUAYA<br />\
    <img src="styles/legend/TCOS_9_3_26.png" /> Comunidad Originaria de Chorocoma<br />\
    <img src="styles/legend/TCOS_9_3_27.png" /> Comunidad Originaria Indígena Lique - Chancahuayto<br />\
    <img src="styles/legend/TCOS_9_3_28.png" /> Comunidad Originaria Indígena Payamaya<br />\
    <img src="styles/legend/TCOS_9_3_29.png" /> COMUNIDAD ORIGINARIA LAURANI PUCHINI<br />\
    <img src="styles/legend/TCOS_9_3_30.png" /> COMUNIDAD ORIGINARIA LLACHARAPI COROJANI<br />\
    <img src="styles/legend/TCOS_9_3_31.png" /> COMUNIDAD ORIGINARIA SULLCUTA COLCHANI<br />\
    <img src="styles/legend/TCOS_9_3_32.png" /> Comunidades Originarias Cairiri, Chapicollo y Puracaña<br />\
    <img src="styles/legend/TCOS_9_3_33.png" /> Marka Cololo Copacabana Antaquilla<br />\
    <img src="styles/legend/TCOS_9_3_34.png" /> MARKA COLOLOCOPACABANA ANTAQUILA<br />\
    <img src="styles/legend/TCOS_9_3_35.png" /> Marka Qamata<br />\
    <img src="styles/legend/TCOS_9_3_36.png" /> Nacionalidad Indígena Urus de Iroito<br />\
    <img src="styles/legend/TCOS_9_3_37.png" /> Puéblo Originario de Ayopaya<br />\
    <img src="styles/legend/TCOS_9_3_38.png" /> SUBCENTRAL SAN MIGUEL DE COPANI<br />\
    <img src="styles/legend/TCOS_9_3_39.png" /> TCO COMUNIDAD ORIGINARIA YOROXA<br />\
    <img src="styles/legend/TCOS_9_3_40.png" /> TCO TACANA III<br />\
    <img src="styles/legend/TCOS_9_3_41.png" /> TCO/TIOC LECOS DE APOLO<br />\
    <img src="styles/legend/TCOS_9_3_42.png" /> TCO/TIOC LECOS DE LARECAJA<br />\
    <img src="styles/legend/TCOS_9_3_43.png" /> TCO/TIOC MOSETEN<br />\
    <img src="styles/legend/TCOS_9_3_44.png" /> TCO/TIOC SAN JOSE DE UCHUPIAMONAS<br />\
    <img src="styles/legend/TCOS_9_3_45.png" /> TCO/TIOC T´SMANE MOSETENES-PILON LAJAS<br />\
    <img src="styles/legend/TCOS_9_3_46.png" /> TCO/TIOC TACANA<br />' });
var format_TCOS_8_4 = new ol.format.GeoJSON();
var features_TCOS_8_4 = format_TCOS_8_4.readFeatures(json_TCOS_8_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_8_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_8_4.addFeatures(features_TCOS_8_4);
var lyr_TCOS_8_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_8_4, 
                style: style_TCOS_8_4,
                popuplayertitle: 'TCOS_8',
                interactive: true,
    title: 'TCOS_8<br />\
    <img src="styles/legend/TCOS_8_4_0.png" /> TCO CAYUBABA<br />\
    <img src="styles/legend/TCOS_8_4_1.png" /> TCO/TIOC CAVINEÑO<br />\
    <img src="styles/legend/TCOS_8_4_2.png" /> TCO/TIOC CHACOBO PACAHUARA<br />\
    <img src="styles/legend/TCOS_8_4_3.png" /> TCO/TIOC ITONAMA<br />\
    <img src="styles/legend/TCOS_8_4_4.png" /> TCO/TIOC JOAQUINIANO<br />\
    <img src="styles/legend/TCOS_8_4_5.png" /> TCO/TIOC MORÉ<br />\
    <img src="styles/legend/TCOS_8_4_6.png" /> TCO/TIOC MULTIETNICO II<br />\
    <img src="styles/legend/TCOS_8_4_7.png" /> TCO/TIOC PUESTO ARAONA<br />\
    <img src="styles/legend/TCOS_8_4_8.png" /> TCO/TIOC TACANA-CAVINEÑO<br />\
    <img src="styles/legend/TCOS_8_4_9.png" /> TCO/TIOC YAMINAHUA MACHINERI<br />' });
var format_TCOS_7_5 = new ol.format.GeoJSON();
var features_TCOS_7_5 = format_TCOS_7_5.readFeatures(json_TCOS_7_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_7_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_7_5.addFeatures(features_TCOS_7_5);
var lyr_TCOS_7_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_7_5, 
                style: style_TCOS_7_5,
                popuplayertitle: 'TCOS_7',
                interactive: true,
    title: 'TCOS_7<br />\
    <img src="styles/legend/TCOS_7_5_0.png" /> (Ranchos Pojpo, Retiro y Quitarge) Asociacion de Comunidades Originarias e Ingigenas de Ayllus y Markas de Poroma Asocoin - Poroma, Valle Quillacas Marka Pojpo y la Marka San Lucas Payacollo<br />\
    <img src="styles/legend/TCOS_7_5_1.png" /> AYLLU CANAZA AUTORIDADES ORIGINARIAS<br />\
    <img src="styles/legend/TCOS_7_5_2.png" /> AYLLU COLLANA<br />\
    <img src="styles/legend/TCOS_7_5_3.png" /> AYLLU MAÑU<br />\
    <img src="styles/legend/TCOS_7_5_4.png" /> Ayllu Originario de Tirina<br />\
    <img src="styles/legend/TCOS_7_5_5.png" /> Ayllu Qaña Alta y Baja<br />\
    <img src="styles/legend/TCOS_7_5_6.png" /> AYLLU TECOYA MACXI<br />\
    <img src="styles/legend/TCOS_7_5_7.png" /> AYLLU URINSAYA<br />\
    <img src="styles/legend/TCOS_7_5_8.png" /> CABILDO JAHUACAYA<br />\
    <img src="styles/legend/TCOS_7_5_9.png" /> COMUNIDAD ORIGINARIA DE POTOBAMBA AYLLU QOLLANA<br />\
    <img src="styles/legend/TCOS_7_5_10.png" /> MOJON TAPACARI<br />\
    <img src="styles/legend/TCOS_7_5_11.png" /> ORGANIZACIÓN DE PUEBLOS ORIGINARIOS DE LA MARKA QUILA QUILA<br />\
    <img src="styles/legend/TCOS_7_5_12.png" /> PUEBLO INDIGENA ORIGINARIO  ANGOLA  POLIGONO 102<br />\
    <img src="styles/legend/TCOS_7_5_13.png" /> PUEBLO INDIGENA ORIGINARIO JATUN RUMI POLIGONO 100<br />\
    <img src="styles/legend/TCOS_7_5_14.png" /> PUEBLO INDIGENA ORIGINARIO MISKHA MAYU POLIGONO 103<br />\
    <img src="styles/legend/TCOS_7_5_15.png" /> PUEBLO INDIGENA ORIGINARIO PICILY<br />\
    <img src="styles/legend/TCOS_7_5_16.png" /> PUEBLO INDIGENA ORIGINARIO PUKA PUKA POLIGONO 101<br />\
    <img src="styles/legend/TCOS_7_5_17.png" /> PUEBLO INDIGENA ORIGINARIO QOLLPA PAMPA<br />\
    <img src="styles/legend/TCOS_7_5_18.png" /> PUEBLO INDIGENA ORIGINARIO THOLA MAYU<br />\
    <img src="styles/legend/TCOS_7_5_19.png" /> SINDICATO AGRARIO CORRALON<br />\
    <img src="styles/legend/TCOS_7_5_20.png" /> SINDICATO AGRARIO HUAYLLA PAMPA<br />\
    <img src="styles/legend/TCOS_7_5_21.png" /> Yucas Jatun Ayllu de San Juan de Orkas<br />' });
var format_TCOS_6_6 = new ol.format.GeoJSON();
var features_TCOS_6_6 = format_TCOS_6_6.readFeatures(json_TCOS_6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_6_6.addFeatures(features_TCOS_6_6);
var lyr_TCOS_6_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_6_6, 
                style: style_TCOS_6_6,
                popuplayertitle: 'TCOS_6',
                interactive: true,
    title: 'TCOS_6<br />\
    <img src="styles/legend/TCOS_6_6_0.png" /> Ayllu Cahualli Araya Arriba Primero<br />\
    <img src="styles/legend/TCOS_6_6_1.png" /> AYLLU CALLAPA ARAYA<br />\
    <img src="styles/legend/TCOS_6_6_2.png" /> AYLLU KALLAPA ARRIBA<br />\
    <img src="styles/legend/TCOS_6_6_3.png" /> Ayllu Killacas Urmiri<br />\
    <img src="styles/legend/TCOS_6_6_4.png" /> Ayllu Originario Ankasuqa Puituco<br />\
    <img src="styles/legend/TCOS_6_6_5.png" /> Ayllu Qaqachaka - Ayllus en Paz<br />\
    <img src="styles/legend/TCOS_6_6_6.png" /> AYLLU SULLKAYANA CAHUAYO<br />\
    <img src="styles/legend/TCOS_6_6_7.png" /> Ayllu Vacuyo Andamarca<br />\
    <img src="styles/legend/TCOS_6_6_8.png" /> Ayllu Yanaque, Changara y Calacala<br />\
    <img src="styles/legend/TCOS_6_6_9.png" /> Jatun Ayllu Pocoata<br />\
    <img src="styles/legend/TCOS_6_6_10.png" /> Laymes y Pucaras - Ayllus en Paz<br />\
    <img src="styles/legend/TCOS_6_6_11.png" /> Marka Culta<br />\
    <img src="styles/legend/TCOS_6_6_12.png" /> MARKA LAGUNILLAS<br />' });
var format_TCOS_5_7 = new ol.format.GeoJSON();
var features_TCOS_5_7 = format_TCOS_5_7.readFeatures(json_TCOS_5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_5_7.addFeatures(features_TCOS_5_7);
var lyr_TCOS_5_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_5_7, 
                style: style_TCOS_5_7,
                popuplayertitle: 'TCOS_5',
                interactive: true,
    title: 'TCOS_5<br />\
    <img src="styles/legend/TCOS_5_7_0.png" /> TCO CANICHANA<br />\
    <img src="styles/legend/TCOS_5_7_1.png" /> TCO/TIOC CHIMAN<br />\
    <img src="styles/legend/TCOS_5_7_2.png" /> TCO/TIOC MOJEÑO IGNACIANO (TIMI)<br />\
    <img src="styles/legend/TCOS_5_7_3.png" /> TCO/TIOC MOVIMA<br />\
    <img src="styles/legend/TCOS_5_7_4.png" /> TCO/TIOC MOVIMA II<br />\
    <img src="styles/legend/TCOS_5_7_5.png" /> TCO/TIOC MULTIETNICO TIM<br />\
    <img src="styles/legend/TCOS_5_7_6.png" /> TCO/TIOC SIRIONO<br />\
    <img src="styles/legend/TCOS_5_7_7.png" /> TCO/TIOC TIPNIS<br />\
    <img src="styles/legend/TCOS_5_7_8.png" /> TCO/TIOC YUQUI<br />\
    <img src="styles/legend/TCOS_5_7_9.png" /> TCO/TIOC YURACARE<br />\
    <img src="styles/legend/TCOS_5_7_10.png" /> TCO/TIOC YURACARE Y TRINITARIA EL PALLAR<br />' });
var format_TCOS_4_8 = new ol.format.GeoJSON();
var features_TCOS_4_8 = format_TCOS_4_8.readFeatures(json_TCOS_4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_4_8.addFeatures(features_TCOS_4_8);
var lyr_TCOS_4_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_4_8, 
                style: style_TCOS_4_8,
                popuplayertitle: 'TCOS_4',
                interactive: true,
    title: 'TCOS_4<br />\
    <img src="styles/legend/TCOS_4_8_0.png" /> ASOCIACION COMUNITARIA AYLLU MENOR DE ESTARCA<br />\
    <img src="styles/legend/TCOS_4_8_1.png" /> Asociación Comunitaria de los Ayllus Originarios de totora I<br />\
    <img src="styles/legend/TCOS_4_8_2.png" /> ASOCIACION DE AYLLUS ORIGINARIOS DE YAWISLA<br />\
    <img src="styles/legend/TCOS_4_8_3.png" /> AYLLU "CHONTOLA"<br />\
    <img src="styles/legend/TCOS_4_8_4.png" /> Ayllu Aransaya<br />\
    <img src="styles/legend/TCOS_4_8_5.png" /> AYLLU ARANSAYA Y URINSAYA DEL CANTON TOLAPAMPA<br />\
    <img src="styles/legend/TCOS_4_8_6.png" /> AYLLU CALA CALA<br />\
    <img src="styles/legend/TCOS_4_8_7.png" /> AYLLU CHIRA CHAQUI<br />\
    <img src="styles/legend/TCOS_4_8_8.png" /> AYLLU CHIUTARI ALTA Y BAJA<br />\
    <img src="styles/legend/TCOS_4_8_9.png" /> AYLLU CHUTAHUA ALTA Y BAJA CHAQUI<br />\
    <img src="styles/legend/TCOS_4_8_10.png" /> AYLLU COIPASI ALTA Y BAJA CHAQUI<br />\
    <img src="styles/legend/TCOS_4_8_11.png" /> Ayllu Huaycaya Mangasaya<br />\
    <img src="styles/legend/TCOS_4_8_12.png" /> Ayllu Jatun Mankasaya<br />\
    <img src="styles/legend/TCOS_4_8_13.png" /> Ayllu Jatun Tulla<br />\
    <img src="styles/legend/TCOS_4_8_14.png" /> Ayllu Jesús de Machaca<br />\
    <img src="styles/legend/TCOS_4_8_15.png" /> Ayllu Juchuy Qhapaqanaqa<br />\
    <img src="styles/legend/TCOS_4_8_16.png" /> Ayllu Juchuy Qhurqa<br />\
    <img src="styles/legend/TCOS_4_8_17.png" /> Ayllu Juchuy Qollana<br />\
    <img src="styles/legend/TCOS_4_8_18.png" /> Ayllu Juchuy Tawqa<br />\
    <img src="styles/legend/TCOS_4_8_19.png" /> Ayllu Kapakanaqa<br />\
    <img src="styles/legend/TCOS_4_8_20.png" /> Ayllu Kinsa Suyo<br />\
    <img src="styles/legend/TCOS_4_8_21.png" /> Ayllu Kollana<br />\
    <img src="styles/legend/TCOS_4_8_22.png" /> Ayllu Korka<br />\
    <img src="styles/legend/TCOS_4_8_23.png" /> AYLLU LUPACA CHAQUI<br />\
    <img src="styles/legend/TCOS_4_8_24.png" /> AYLLU MAYOR DE CHACOPAMPA<br />\
    <img src="styles/legend/TCOS_4_8_25.png" /> Ayllu Originario de Mangasaya<br />\
    <img src="styles/legend/TCOS_4_8_26.png" /> AYLLU PACAJA ALTA Y BAJA CHAQUI<br />\
    <img src="styles/legend/TCOS_4_8_27.png" /> Ayllu Pati Pati<br />\
    <img src="styles/legend/TCOS_4_8_28.png" /> AYLLU PHUNA<br />\
    <img src="styles/legend/TCOS_4_8_29.png" /> Ayllu Phuna Alta Chico Chico<br />\
    <img src="styles/legend/TCOS_4_8_30.png" /> AYLLU QHASA<br />\
    <img src="styles/legend/TCOS_4_8_31.png" /> Ayllu Saca Saca<br />\
    <img src="styles/legend/TCOS_4_8_32.png" /> AYLLU SAN ANDRES DE MACHACA<br />\
    <img src="styles/legend/TCOS_4_8_33.png" /> Ayllu Santiago de Machaca<br />\
    <img src="styles/legend/TCOS_4_8_34.png" /> AYLLU SINSIMA<br />\
    <img src="styles/legend/TCOS_4_8_35.png" /> Ayllu Sullka (Jatun y Juchuy) - Tomave<br />\
    <img src="styles/legend/TCOS_4_8_36.png" /> Ayllu Tauka Urinsaya y Qhasa Aransaya - Tomave<br />\
    <img src="styles/legend/TCOS_4_8_37.png" /> Ayllu Tauka y Chicoca - Tomave<br />\
    <img src="styles/legend/TCOS_4_8_38.png" /> Ayllu Ullaga<br />\
    <img src="styles/legend/TCOS_4_8_39.png" /> Ayllu Uruquilla<br />\
    <img src="styles/legend/TCOS_4_8_40.png" /> AYLLU VISIJSA CHAQUI<br />\
    <img src="styles/legend/TCOS_4_8_41.png" /> AYLLUS AYZOQA Y TAUQA<br />\
    <img src="styles/legend/TCOS_4_8_42.png" /> Ayllus de Talina<br />\
    <img src="styles/legend/TCOS_4_8_43.png" /> Ayllus del Distrito Municipal Indigena de Calcha<br />\
    <img src="styles/legend/TCOS_4_8_44.png" /> Ayllus Jatum Tawqa y Papatawqa<br />\
    <img src="styles/legend/TCOS_4_8_45.png" /> Ayllus Originarios Chira, Chaqori y Pacaja<br />\
    <img src="styles/legend/TCOS_4_8_46.png" /> COMUNIDAD CAMPESINA "GRAN CHOCAYA"<br />\
    <img src="styles/legend/TCOS_4_8_47.png" /> COMUNIDAD INDIGENA JATUN AYLLU,  JUCHUY AYLLU  Y CHAWPI AYLLU (SUD LIPEZ)<br />\
    <img src="styles/legend/TCOS_4_8_48.png" /> Comunidad Originaria  E. Baldivieso<br />\
    <img src="styles/legend/TCOS_4_8_49.png" /> CONSEJO DE CACIQUES "JATUN KELLAJA", "LLAJTA YUCASA", "CANTU YUCASA" Y "ASANAQUE"<br />\
    <img src="styles/legend/TCOS_4_8_50.png" /> JATUN AYLLU (PORCO) Y JUCHUY AYLLU (PORCO)<br />\
    <img src="styles/legend/TCOS_4_8_51.png" /> Jatun Ayllu de Toropalca<br />\
    <img src="styles/legend/TCOS_4_8_52.png" /> Jatun Ayllu Yura<br />\
    <img src="styles/legend/TCOS_4_8_53.png" /> Jila Chico y Jila Grande - Tomave<br />\
    <img src="styles/legend/TCOS_4_8_54.png" /> Nor Lípez<br />\
    <img src="styles/legend/TCOS_4_8_55.png" /> SIETE AYLLUS DE PUNA<br />\
    <img src="styles/legend/TCOS_4_8_56.png" /> TURIZA<br />' });
var format_TCOS_3_9 = new ol.format.GeoJSON();
var features_TCOS_3_9 = format_TCOS_3_9.readFeatures(json_TCOS_3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_3_9.addFeatures(features_TCOS_3_9);
var lyr_TCOS_3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_3_9, 
                style: style_TCOS_3_9,
                popuplayertitle: 'TCOS_3',
                interactive: true,
    title: 'TCOS_3<br />\
    <img src="styles/legend/TCOS_3_9_0.png" /> ANDAMARCA MARKA DEL SUYU JACHA CARANGAS<br />\
    <img src="styles/legend/TCOS_3_9_1.png" /> Asoc. Com. De los Ayllus Aranzaya y Maransaya de Tahua y Yonza Area 1, 2, 3 y 4<br />\
    <img src="styles/legend/TCOS_3_9_2.png" /> AYLLU BELEN DE ANDAMARCA DEL SUYO JACH\'A CARANGAS<br />\
    <img src="styles/legend/TCOS_3_9_3.png" /> AYLLU COLLANA DEL MUNICIPIO DE ESMERALDA PROVINCIA LITORAL<br />\
    <img src="styles/legend/TCOS_3_9_4.png" /> Ayllu Collana y Pichacani<br />\
    <img src="styles/legend/TCOS_3_9_5.png" /> AYLLU COLLO HUANAPA Y AYLLU VILLA HUANAPA<br />\
    <img src="styles/legend/TCOS_3_9_6.png" /> AYLLU HORNILLO, AYLLU GRANDE, AYLLU CAHUANA Y AYLLU HUANAQUE<br />\
    <img src="styles/legend/TCOS_3_9_7.png" /> AYLLU QHAMACHA<br />\
    <img src="styles/legend/TCOS_3_9_8.png" /> Ayllu Sullka (Villa Esperanza)<br />\
    <img src="styles/legend/TCOS_3_9_9.png" /> AYLLU TUAÑA<br />\
    <img src="styles/legend/TCOS_3_9_10.png" /> CARANGAS MARKA<br />\
    <img src="styles/legend/TCOS_3_9_11.png" /> COIPASA MARKA<br />\
    <img src="styles/legend/TCOS_3_9_12.png" /> Comunidad de Huancalle<br />\
    <img src="styles/legend/TCOS_3_9_13.png" /> COMUNIDAD DE PAYRUMANI AYLLU CAPI<br />\
    <img src="styles/legend/TCOS_3_9_14.png" /> COMUNIDAD SAN ANTONIO DE ANGULO<br />\
    <img src="styles/legend/TCOS_3_9_15.png" /> COMUNIDAD UNION CENTRO CAPI<br />\
    <img src="styles/legend/TCOS_3_9_16.png" /> CORQUE MARKA DEL SUYU JACHA CARANGAS<br />\
    <img src="styles/legend/TCOS_3_9_17.png" /> Huayllamarca Marka Parcialidad Aranzaya del Suyu Jacha Carangas<br />\
    <img src="styles/legend/TCOS_3_9_18.png" /> JACHA AYLLU CARECRUZ<br />\
    <img src="styles/legend/TCOS_3_9_19.png" /> LA RIVERA MARKA<br />\
    <img src="styles/legend/TCOS_3_9_20.png" /> MARKA  CHALLACOTA BELEN<br />\
    <img src="styles/legend/TCOS_3_9_21.png" /> Marka Aroma<br />\
    <img src="styles/legend/TCOS_3_9_22.png" /> MARKA CHOQUECOTA DEL SUYU JACHA CARANGAS<br />\
    <img src="styles/legend/TCOS_3_9_23.png" /> MARKA CURAHUARA DEL SUYU JACHA CARANGAS<br />\
    <img src="styles/legend/TCOS_3_9_24.png" /> MARKA LA JOYA<br />\
    <img src="styles/legend/TCOS_3_9_25.png" /> MARKA MAYACHASITA MARKANAKA<br />\
    <img src="styles/legend/TCOS_3_9_26.png" /> MARKA PAJCHA SAN MARTIN<br />\
    <img src="styles/legend/TCOS_3_9_27.png" /> Marka Salinas de Garci Mendoza<br />\
    <img src="styles/legend/TCOS_3_9_28.png" /> NOR CAPI DEL AYLLU CAPI DE LA PROVINCIA LITORAL HUACHACALLA<br />\
    <img src="styles/legend/TCOS_3_9_29.png" /> ORGANIZACIÓN TERRITORIAL TERRITORIO ORIGINARIO MILENARIO MARKA NUEVA LLALLAGUA<br />\
    <img src="styles/legend/TCOS_3_9_30.png" /> PUEBLO INDIGENA ORIGINARIO TOTORA MARKA DEL SUYU JACHA CARANGAS<br />\
    <img src="styles/legend/TCOS_3_9_31.png" /> TCO TURCO MARCA DEL SUYO JACHA CARANGAS<br />\
    <img src="styles/legend/TCOS_3_9_32.png" /> TERRITORIO ORIGINARIO CAMPESINO PISIGA, MARKA LA RIVERA, SUYU JACHA CARANGAS<br />\
    <img src="styles/legend/TCOS_3_9_33.png" /> TIOC SABAYA FRONTERA MARKA<br />' });
var format_TCOS_2_10 = new ol.format.GeoJSON();
var features_TCOS_2_10 = format_TCOS_2_10.readFeatures(json_TCOS_2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_2_10.addFeatures(features_TCOS_2_10);
var lyr_TCOS_2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_2_10, 
                style: style_TCOS_2_10,
                popuplayertitle: 'TCOS_2',
                interactive: true,
    title: 'TCOS_2<br />\
    <img src="styles/legend/TCOS_2_10_0.png" /> CAPITANIA ZONA HUACARETA<br />\
    <img src="styles/legend/TCOS_2_10_1.png" /> CAPITANIA ZONA MUYUPAMPA<br />\
    <img src="styles/legend/TCOS_2_10_2.png" /> CHUQUISACA 01<br />\
    <img src="styles/legend/TCOS_2_10_3.png" /> PUEBLO INDIGENA GUARANI DEL DEPARTAMENTO DE CHUQUISACA<br />\
    <img src="styles/legend/TCOS_2_10_4.png" /> TCO ALTO PARAPETI<br />\
    <img src="styles/legend/TCOS_2_10_5.png" /> TCO AVATIRI-INGRE<br />\
    <img src="styles/legend/TCOS_2_10_6.png" /> TCO BAURES<br />\
    <img src="styles/legend/TCOS_2_10_7.png" /> TCO/TIOC "TOBITE II"<br />\
    <img src="styles/legend/TCOS_2_10_8.png" /> TCO/TIOC "ZAPOCO"<br />\
    <img src="styles/legend/TCOS_2_10_9.png" /> TCO/TIOC AVATIRI HUACARETA<br />\
    <img src="styles/legend/TCOS_2_10_10.png" /> TCO/TIOC BAJO PARAGUA<br />\
    <img src="styles/legend/TCOS_2_10_11.png" /> TCO/TIOC CHARAGUA NORTE<br />\
    <img src="styles/legend/TCOS_2_10_12.png" /> TCO/TIOC CHARAGUA SUR<br />\
    <img src="styles/legend/TCOS_2_10_13.png" /> TCO/TIOC GUARAYOS<br />\
    <img src="styles/legend/TCOS_2_10_14.png" /> TCO/TIOC GUAYE - RINCON DEL TIGRE<br />\
    <img src="styles/legend/TCOS_2_10_15.png" /> TCO/TIOC ISOSO<br />\
    <img src="styles/legend/TCOS_2_10_16.png" /> TCO/TIOC ITIKA GUASÚ<br />\
    <img src="styles/legend/TCOS_2_10_17.png" /> TCO/TIOC ITIKAPARIRENDA<br />\
    <img src="styles/legend/TCOS_2_10_18.png" /> TCO/TIOC IUPAGUASU<br />\
    <img src="styles/legend/TCOS_2_10_19.png" /> TCO/TIOC KAAGUASU<br />\
    <img src="styles/legend/TCOS_2_10_20.png" /> TCO/TIOC KAAMI<br />\
    <img src="styles/legend/TCOS_2_10_21.png" /> TCO/TIOC KAIPEPENDI KARAVAICHO<br />\
    <img src="styles/legend/TCOS_2_10_22.png" /> TCO/TIOC LOMERIO<br />\
    <img src="styles/legend/TCOS_2_10_23.png" /> TCO/TIOC MACHARETI CARANDAETI ÑANCAROINZA<br />\
    <img src="styles/legend/TCOS_2_10_24.png" /> TCO/TIOC MONTEVERDE<br />\
    <img src="styles/legend/TCOS_2_10_25.png" /> TCO/TIOC PANTANAL<br />\
    <img src="styles/legend/TCOS_2_10_26.png" /> TCO/TIOC PC. TURUBO ESTE<br />\
    <img src="styles/legend/TCOS_2_10_27.png" /> TCO/TIOC SANTA TERESITA<br />\
    <img src="styles/legend/TCOS_2_10_28.png" /> TCO/TIOC TAKOVO<br />\
    <img src="styles/legend/TCOS_2_10_29.png" /> TCO/TIOC TAPIETE<br />\
    <img src="styles/legend/TCOS_2_10_30.png" /> TCO/TIOC TENTAYAPI<br />\
    <img src="styles/legend/TCOS_2_10_31.png" /> TCO/TIOC WEENHAYEK<br />\
    <img src="styles/legend/TCOS_2_10_32.png" /> TCO/TIOC YAKU-IGUA<br />' });
var format_TCOS_1_11 = new ol.format.GeoJSON();
var features_TCOS_1_11 = format_TCOS_1_11.readFeatures(json_TCOS_1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCOS_1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCOS_1_11.addFeatures(features_TCOS_1_11);
var lyr_TCOS_1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCOS_1_11, 
                style: style_TCOS_1_11,
                popuplayertitle: 'TCOS_1',
                interactive: true,
    title: 'TCOS_1<br />\
    <img src="styles/legend/TCOS_1_11_0.png" /> Ayllu Andamarca (Chiracoro y Pampoyo)<br />\
    <img src="styles/legend/TCOS_1_11_1.png" /> Ayllu Araya Callapa<br />\
    <img src="styles/legend/TCOS_1_11_2.png" /> AYLLU CAHUALLI<br />\
    <img src="styles/legend/TCOS_1_11_3.png" /> Ayllu Cahualli Araya - Canton Condo C<br />\
    <img src="styles/legend/TCOS_1_11_4.png" /> Ayllu Cahualli Maga<br />\
    <img src="styles/legend/TCOS_1_11_5.png" /> Ayllu Callapa<br />\
    <img src="styles/legend/TCOS_1_11_6.png" /> AYLLU COLLANA ARRIBA SANTIAGO DE PARIA<br />\
    <img src="styles/legend/TCOS_1_11_7.png" /> Ayllu Collana B (Caico Bolivar)<br />\
    <img src="styles/legend/TCOS_1_11_8.png" /> AYLLU COLLANA DISTRITO NORTE CONDO<br />\
    <img src="styles/legend/TCOS_1_11_9.png" /> AYLLU ILAVE CHICO<br />\
    <img src="styles/legend/TCOS_1_11_10.png" /> Ayllu Ilave Grande<br />\
    <img src="styles/legend/TCOS_1_11_11.png" /> Ayllu Mallcoca<br />\
    <img src="styles/legend/TCOS_1_11_12.png" /> AYLLU SENACO<br />\
    <img src="styles/legend/TCOS_1_11_13.png" /> Ayllu Sullcayana<br />\
    <img src="styles/legend/TCOS_1_11_14.png" /> AYLLU SULLCAYANA SEGUNDO<br />\
    <img src="styles/legend/TCOS_1_11_15.png" /> Ayllu Tacagua<br />\
    <img src="styles/legend/TCOS_1_11_16.png" /> AYLLU YANAQUE PRIMERO<br />\
    <img src="styles/legend/TCOS_1_11_17.png" /> Ayllu Yucasa<br />\
    <img src="styles/legend/TCOS_1_11_18.png" /> CANTON URMIRI DE QUILLACAS<br />\
    <img src="styles/legend/TCOS_1_11_19.png" /> COMUNIDAD ANTARAQUE DEL AYLLU MOSCOCA<br />\
    <img src="styles/legend/TCOS_1_11_20.png" /> COMUNIDAD ANTUTA<br />\
    <img src="styles/legend/TCOS_1_11_21.png" /> Comunidad Ayllu Cochoca<br />\
    <img src="styles/legend/TCOS_1_11_22.png" /> Comunidad Canton Lucumpaya<br />\
    <img src="styles/legend/TCOS_1_11_23.png" /> COMUNIDAD CANTON SORAGA<br />\
    <img src="styles/legend/TCOS_1_11_24.png" /> COMUNIDAD CERRO GORDO<br />\
    <img src="styles/legend/TCOS_1_11_25.png" /> COMUNIDAD COLLANA<br />\
    <img src="styles/legend/TCOS_1_11_26.png" /> COMUNIDAD DE ACARANI Y CONCHI<br />\
    <img src="styles/legend/TCOS_1_11_27.png" /> COMUNIDAD DE CANTUYO Y MICAYA DEL CANTON URMIRI DE QUILLACAS<br />\
    <img src="styles/legend/TCOS_1_11_28.png" /> Comunidad de Picotani<br />\
    <img src="styles/legend/TCOS_1_11_29.png" /> Comunidad de Sacari<br />\
    <img src="styles/legend/TCOS_1_11_30.png" /> Comunidad Huerta Pampa Belén<br />\
    <img src="styles/legend/TCOS_1_11_31.png" /> COMUNIDAD ICHOCOTA<br />\
    <img src="styles/legend/TCOS_1_11_32.png" /> COMUNIDAD ORIGINARIA VILAKAWA DE URMIRI DE QUILLACAS<br />\
    <img src="styles/legend/TCOS_1_11_33.png" /> COMUNIDAD PACOLLANI DEL AYLLU MOSCOCA<br />\
    <img src="styles/legend/TCOS_1_11_34.png" /> J ACHA MARKA TAPAKARI CONDOR APACHETA<br />\
    <img src="styles/legend/TCOS_1_11_35.png" /> MARCA SANTUARIO DE QUILLACAS<br />\
    <img src="styles/legend/TCOS_1_11_36.png" /> Marka Pampa Aullagas<br />\
    <img src="styles/legend/TCOS_1_11_37.png" /> OTB AYLLU SULLCA<br />\
    <img src="styles/legend/TCOS_1_11_38.png" /> OTB COMUNIDAD DE CHILLARI DEL CANTON DE URMIRI DE QUILLACAS<br />\
    <img src="styles/legend/TCOS_1_11_39.png" /> OTB COMUNIDAD DE JANCHUYO DEL CANTON URMIRI DE QUILLACAS<br />\
    <img src="styles/legend/TCOS_1_11_40.png" /> Pueblo Indígena Uru Murato<br />\
    <img src="styles/legend/TCOS_1_11_41.png" /> Pueblo Originario de Orinoca<br />\
    <img src="styles/legend/TCOS_1_11_42.png" /> VICHAJLUPE DEL AYLLU MAMANOCA<br />' });
var format_MUNICIPIOS_12 = new ol.format.GeoJSON();
var features_MUNICIPIOS_12 = format_MUNICIPIOS_12.readFeatures(json_MUNICIPIOS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_12.addFeatures(features_MUNICIPIOS_12);
var lyr_MUNICIPIOS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_12, 
                style: style_MUNICIPIOS_12,
                popuplayertitle: 'MUNICIPIOS',
                interactive: false,
                title: '<img src="styles/legend/MUNICIPIOS_12.png" /> MUNICIPIOS'
            });
var format_DEPTO_13 = new ol.format.GeoJSON();
var features_DEPTO_13 = format_DEPTO_13.readFeatures(json_DEPTO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPTO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPTO_13.addFeatures(features_DEPTO_13);
var lyr_DEPTO_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPTO_13, 
                style: style_DEPTO_13,
                popuplayertitle: 'DEPTO',
                interactive: false,
                title: '<img src="styles/legend/DEPTO_13.png" /> DEPTO'
            });
var group_TCOS = new ol.layer.Group({
                                layers: [lyr_TCOS_11_1,lyr_TCOS_10_2,lyr_TCOS_9_3,lyr_TCOS_8_4,lyr_TCOS_7_5,lyr_TCOS_6_6,lyr_TCOS_5_7,lyr_TCOS_4_8,lyr_TCOS_3_9,lyr_TCOS_2_10,lyr_TCOS_1_11,],
                                fold: 'close',
                                title: 'TCOS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_TCOS_11_1.setVisible(true);lyr_TCOS_10_2.setVisible(true);lyr_TCOS_9_3.setVisible(true);lyr_TCOS_8_4.setVisible(true);lyr_TCOS_7_5.setVisible(true);lyr_TCOS_6_6.setVisible(true);lyr_TCOS_5_7.setVisible(true);lyr_TCOS_4_8.setVisible(true);lyr_TCOS_3_9.setVisible(true);lyr_TCOS_2_10.setVisible(true);lyr_TCOS_1_11.setVisible(true);lyr_MUNICIPIOS_12.setVisible(true);lyr_DEPTO_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TCOS,lyr_MUNICIPIOS_12,lyr_DEPTO_13];
lyr_TCOS_11_1.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_10_2.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_9_3.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_8_4.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_7_5.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_6_6.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_5_7.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_4_8.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_3_9.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_2_10.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_TCOS_1_11.set('fieldAliases', {'municipio2': 'municipio2', 'tco_tioc': 'tco_tioc', 'nombre_tco': 'nombre_tco', 'estado': 'estado', });
lyr_MUNICIPIOS_12.set('fieldAliases', {'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'tioc_aioc': 'tioc_aioc', 'ord_mun': 'ord_mun', 'nro_ley': 'nro_ley', 'fecha_ley': 'fecha_ley', 'con_metrop': 'con_metrop', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'f_crec_tot': 'f_crec_tot', 'cultprin23': 'cultprin23', 'prodagri23': 'prodagri23', 'prodpecu23': 'prodpecu23', 'voc_sup_ha': 'voc_sup_ha', 'potencial': 'potencial', 'cob_veget': 'cob_veget', 'cob_veg_ha': 'cob_veg_ha', 'uso_actual': 'uso_actual', 'uso_act_ha': 'uso_act_ha', 'mpio_2012': 'mpio_2012', 'po_cnpv_12': 'po_cnpv_12', 'mpio_2024': 'mpio_2024', 'po_cpv_24': 'po_cpv_24', 'img_siembr': 'img_siembr', 'img_cosech': 'img_cosech', 'avan_mm': 'avan_mm', 'sup_cult': 'sup_cult', 'sup_n_cult': 'sup_n_cult', });
lyr_DEPTO_13.set('fieldAliases', {'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'tioc_aioc': 'tioc_aioc', 'ord_mun': 'ord_mun', 'nro_ley': 'nro_ley', 'fecha_ley': 'fecha_ley', });
lyr_TCOS_11_1.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_10_2.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_9_3.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_8_4.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_7_5.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_6_6.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_5_7.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_4_8.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_3_9.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_2_10.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_TCOS_1_11.set('fieldImages', {'municipio2': 'TextEdit', 'tco_tioc': 'TextEdit', 'nombre_tco': 'TextEdit', 'estado': 'TextEdit', });
lyr_MUNICIPIOS_12.set('fieldImages', {'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'tioc_aioc': 'TextEdit', 'ord_mun': 'TextEdit', 'nro_ley': 'TextEdit', 'fecha_ley': 'TextEdit', 'con_metrop': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'f_crec_tot': 'TextEdit', 'cultprin23': 'TextEdit', 'prodagri23': 'TextEdit', 'prodpecu23': 'TextEdit', 'voc_sup_ha': 'TextEdit', 'potencial': 'TextEdit', 'cob_veget': 'TextEdit', 'cob_veg_ha': 'TextEdit', 'uso_actual': 'TextEdit', 'uso_act_ha': 'TextEdit', 'mpio_2012': 'TextEdit', 'po_cnpv_12': 'Range', 'mpio_2024': 'TextEdit', 'po_cpv_24': 'Range', 'img_siembr': 'Range', 'img_cosech': 'Range', 'avan_mm': 'Range', 'sup_cult': 'TextEdit', 'sup_n_cult': 'TextEdit', });
lyr_DEPTO_13.set('fieldImages', {'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'tioc_aioc': 'TextEdit', 'ord_mun': 'TextEdit', 'nro_ley': 'TextEdit', 'fecha_ley': 'TextEdit', });
lyr_TCOS_11_1.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_10_2.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_9_3.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_8_4.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_7_5.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_6_6.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_5_7.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_4_8.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_3_9.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_2_10.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_TCOS_1_11.set('fieldLabels', {'municipio2': 'inline label - always visible', 'tco_tioc': 'inline label - always visible', 'nombre_tco': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_MUNICIPIOS_12.set('fieldLabels', {'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'tioc_aioc': 'no label', 'ord_mun': 'no label', 'nro_ley': 'no label', 'fecha_ley': 'no label', 'con_metrop': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'f_crec_tot': 'no label', 'cultprin23': 'no label', 'prodagri23': 'no label', 'prodpecu23': 'no label', 'voc_sup_ha': 'no label', 'potencial': 'no label', 'cob_veget': 'no label', 'cob_veg_ha': 'no label', 'uso_actual': 'no label', 'uso_act_ha': 'no label', 'mpio_2012': 'no label', 'po_cnpv_12': 'no label', 'mpio_2024': 'no label', 'po_cpv_24': 'no label', 'img_siembr': 'no label', 'img_cosech': 'no label', 'avan_mm': 'no label', 'sup_cult': 'no label', 'sup_n_cult': 'no label', });
lyr_DEPTO_13.set('fieldLabels', {'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'tioc_aioc': 'no label', 'ord_mun': 'no label', 'nro_ley': 'no label', 'fecha_ley': 'no label', });
lyr_DEPTO_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});