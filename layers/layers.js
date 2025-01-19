ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8111892.797280, 5818158.397352, -8055248.004383, 5861492.403407]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_milieuhumidev3r_1 = new ol.format.GeoJSON();
var features_milieuhumidev3r_1 = format_milieuhumidev3r_1.readFeatures(json_milieuhumidev3r_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_milieuhumidev3r_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_milieuhumidev3r_1.addFeatures(features_milieuhumidev3r_1);
var lyr_milieuhumidev3r_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_milieuhumidev3r_1, 
                style: style_milieuhumidev3r_1,
                popuplayertitle: 'milieu-humide-v3r',
                interactive: true,
                title: '<img src="styles/legend/milieuhumidev3r_1.png" /> milieu-humide-v3r'
            });

lyr_OSMStandard_0.setVisible(true);lyr_milieuhumidev3r_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_milieuhumidev3r_1];
lyr_milieuhumidev3r_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'TYPE': 'TYPE', 'V_ID_MH': 'V_ID_MH', });
lyr_milieuhumidev3r_1.set('fieldImages', {'OBJECTID': '', 'NOM': '', 'TYPE': '', 'V_ID_MH': '', });
lyr_milieuhumidev3r_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NOM': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'V_ID_MH': 'inline label - always visible', });
lyr_milieuhumidev3r_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});