var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.710000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NewEthio_Regions14_1 = new ol.format.GeoJSON();
var features_NewEthio_Regions14_1 = format_NewEthio_Regions14_1.readFeatures(json_NewEthio_Regions14_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewEthio_Regions14_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewEthio_Regions14_1.addFeatures(features_NewEthio_Regions14_1);
var lyr_NewEthio_Regions14_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewEthio_Regions14_1, 
                style: style_NewEthio_Regions14_1,
                interactive: true,
                title: '<img src="styles/legend/NewEthio_Regions14_1.png" /> NewEthio_Regions14'
            });
var format_RPS_Loc_WGS84_2 = new ol.format.GeoJSON();
var features_RPS_Loc_WGS84_2 = format_RPS_Loc_WGS84_2.readFeatures(json_RPS_Loc_WGS84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPS_Loc_WGS84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPS_Loc_WGS84_2.addFeatures(features_RPS_Loc_WGS84_2);
var lyr_RPS_Loc_WGS84_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RPS_Loc_WGS84_2, 
                style: style_RPS_Loc_WGS84_2,
                interactive: true,
                title: '<img src="styles/legend/RPS_Loc_WGS84_2.png" /> RPS_Loc_WGS84'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NewEthio_Regions14_1.setVisible(true);lyr_RPS_Loc_WGS84_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NewEthio_Regions14_1,lyr_RPS_Loc_WGS84_2];
lyr_NewEthio_Regions14_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM1_EN': 'ADM1_EN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RPS_Loc_WGS84_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Z': 'Z', 'BH_Name': 'BH_Name', });
lyr_NewEthio_Regions14_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADM1_EN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RPS_Loc_WGS84_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'BH_Name': 'TextEdit', });
lyr_NewEthio_Regions14_1.set('fieldLabels', {'OBJECTID': 'no label', 'ADM1_EN': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RPS_Loc_WGS84_2.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'BH_Name': 'header label', });
lyr_RPS_Loc_WGS84_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});