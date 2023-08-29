var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Poblaciones_1 = new ol.format.GeoJSON();
var features_Poblaciones_1 = format_Poblaciones_1.readFeatures(json_Poblaciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblaciones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblaciones_1.addFeatures(features_Poblaciones_1);
var lyr_Poblaciones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblaciones_1, 
                style: style_Poblaciones_1,
                interactive: true,
                title: '<img src="styles/legend/Poblaciones_1.png" /> Poblaciones'
            });
var format_Curvasdenivel_2 = new ol.format.GeoJSON();
var features_Curvasdenivel_2 = format_Curvasdenivel_2.readFeatures(json_Curvasdenivel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel_2.addFeatures(features_Curvasdenivel_2);
var lyr_Curvasdenivel_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenivel_2, 
                style: style_Curvasdenivel_2,
                interactive: true,
                title: '<img src="styles/legend/Curvasdenivel_2.png" /> Curvas de nivel '
            });
var format_Curvasdenivel1000m_3 = new ol.format.GeoJSON();
var features_Curvasdenivel1000m_3 = format_Curvasdenivel1000m_3.readFeatures(json_Curvasdenivel1000m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel1000m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel1000m_3.addFeatures(features_Curvasdenivel1000m_3);
var lyr_Curvasdenivel1000m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenivel1000m_3, 
                style: style_Curvasdenivel1000m_3,
                interactive: true,
                title: '<img src="styles/legend/Curvasdenivel1000m_3.png" /> Curvas de nivel 1000m'
            });
var format_Volcanes_CSO_4 = new ol.format.GeoJSON();
var features_Volcanes_CSO_4 = format_Volcanes_CSO_4.readFeatures(json_Volcanes_CSO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volcanes_CSO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volcanes_CSO_4.addFeatures(features_Volcanes_CSO_4);cluster_Volcanes_CSO_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Volcanes_CSO_4
});
var lyr_Volcanes_CSO_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Volcanes_CSO_4, 
                style: style_Volcanes_CSO_4,
                interactive: true,
                title: '<img src="styles/legend/Volcanes_CSO_4.png" /> Volcanes_CSO'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Poblaciones_1.setVisible(true);lyr_Curvasdenivel_2.setVisible(true);lyr_Curvasdenivel1000m_3.setVisible(true);lyr_Volcanes_CSO_4.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Poblaciones_1,lyr_Curvasdenivel_2,lyr_Curvasdenivel1000m_3,lyr_Volcanes_CSO_4];
lyr_Poblaciones_1.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_Curvasdenivel_2.set('fieldAliases', {'ELEV': 'ELEV', });
lyr_Curvasdenivel1000m_3.set('fieldAliases', {'ELEV': 'ELEV', });
lyr_Volcanes_CSO_4.set('fieldAliases', {'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_Poblaciones_1.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_Curvasdenivel_2.set('fieldImages', {'ELEV': 'TextEdit', });
lyr_Curvasdenivel1000m_3.set('fieldImages', {'ELEV': 'TextEdit', });
lyr_Volcanes_CSO_4.set('fieldImages', {'Nombre': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Poblaciones_1.set('fieldLabels', {'Nombre': 'header label', });
lyr_Curvasdenivel_2.set('fieldLabels', {'ELEV': 'inline label', });
lyr_Curvasdenivel1000m_3.set('fieldLabels', {'ELEV': 'header label', });
lyr_Volcanes_CSO_4.set('fieldLabels', {'Nombre': 'inline label', 'Tipo': 'inline label', });
lyr_Volcanes_CSO_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});