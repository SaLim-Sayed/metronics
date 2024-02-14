import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Apply amCharts theme
am4core.useTheme(am4themes_animated);

const MapWithAnimatedBubbles: React.FC = () => {
  useEffect(() => {
    // Create map instance
    const chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map data
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ["AQ"];

    // Create bubble series for animated bubbles
    const bubbleSeries = chart.series.push(new am4maps.MapImageSeries());
    const bubbleTemplate = bubbleSeries.mapImages.template;
    bubbleTemplate.propertyFields.latitude = "latitude";
    bubbleTemplate.propertyFields.longitude = "longitude";
    bubbleTemplate.tooltipText = "{name}: [bold]{value}[/]";
    bubbleTemplate.fillOpacity = 0.8;
    bubbleTemplate.nonScaling = true;

    // Set animation options
    const animation = bubbleTemplate.createChild(am4core.Circle);
    animation.radius = 15;
    animation.fill = am4core.color("#00cff1");
    animation.animate(
      { property: "scale", from: 1, to: 5 },
      1000,
      am4core.ease.circleOut
    );

    // Add label for country name above each bubble
    const label = bubbleTemplate.createChild(am4core.Label);
    label.text = "{name}";
    label.fontSize = 12;
    label.fill = am4core.color("#000000");
    label.horizontalCenter = "middle";
    label.dy = -20; // Adjust vertical position as needed

    // Add data to bubble series
    bubbleSeries.data = [
      { name: "New York", latitude: 40.7128, longitude: -74.006, value: 100 },
      {
        name: "Los Angeles",
        latitude: 34.0522,
        longitude: -118.2437,
        value: 200,
      },
      { name: "Cairo", latitude: 30.0444, longitude: 31.2357, value: 150 },
      { name: "Riyadh", latitude: 24.7136, longitude: 46.6753, value: 180 },
      {
        name: "Kuwait City",
        latitude: 29.3759,
        longitude: 47.9774,
        value: 220,
      },
      // Add more data as needed
    ];
    return () => {
      // Clean up amCharts when component unmounts
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default MapWithAnimatedBubbles;
