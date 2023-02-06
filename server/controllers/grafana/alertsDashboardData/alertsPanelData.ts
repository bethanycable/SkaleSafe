const alertsPanelData = [
    {
      "collapsed": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 0
      },
      "id": 36,
      "panels": [],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "General info",
      "type": "row"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "fieldConfig": {
        "defaults": {
          "color": {
            "fixedColor": "#f4d598",
            "mode": "fixed"
          },
          "decimals": 0,
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 0,
        "y": 1
      },
      "id": 4,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "count(alertmanager_build_info{instance=~\"$instance\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "title": "Number of instances",
      "type": "stat"
    },
    {
      "columns": [],
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Table containing list of Alertmanager instances showing it's version, up time, last reload time and if it was successful.",
      "fontSize": "90%",
      "gridPos": {
        "h": 5,
        "w": 9,
        "x": 3,
        "y": 1
      },
      "id": 26,
      "links": [],
      "scroll": true,
      "showHeader": true,
      "sort": {
        "col": 13,
        "desc": false
      },
      "styles": [
        {
          "alias": "Time",
          "align": "auto",
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "pattern": "Time",
          "type": "hidden"
        },
        {
          "alias": "Instance",
          "align": "auto",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "instance",
          "thresholds": [],
          "type": "string",
          "unit": "short"
        },
        {
          "alias": "Version",
          "align": "auto",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "version",
          "thresholds": [],
          "type": "string",
          "unit": "short"
        },
        {
          "alias": "Up time",
          "align": "auto",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 0,
          "mappingType": 1,
          "pattern": "Value #A",
          "thresholds": [],
          "type": "number",
          "unit": "s"
        },
        {
          "alias": "Last reload",
          "align": "auto",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 0,
          "mappingType": 1,
          "pattern": "Value #B",
          "thresholds": [],
          "type": "number",
          "unit": "s"
        },
        {
          "alias": "Last reload sucessfull",
          "align": "auto",
          "colorMode": "cell",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "Value #C",
          "thresholds": [
            "0",
            "1"
          ],
          "type": "number",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "/.*/",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        }
      ],
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "time() - (alertmanager_build_info{instance=~\"$instance\"} * on (instance, cluster) group_left process_start_time_seconds{instance=~\"$instance\"})",
          "format": "table",
          "instant": true,
          "intervalFactor": 1,
          "refId": "A"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "time() - alertmanager_config_last_reload_success_timestamp_seconds{instance=~\"$instance\"}",
          "format": "table",
          "instant": true,
          "intervalFactor": 1,
          "refId": "B"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "alertmanager_config_last_reload_successful{instance=~\"$instance\"}",
          "format": "table",
          "instant": true,
          "intervalFactor": 1,
          "refId": "C"
        }
      ],
      "title": "Instance versions and up time",
      "transform": "table",
      "type": "table-old"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Number of peers in the Alertmanager cluster.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "fixedColor": "#e5ac0e",
            "mode": "fixed"
          },
          "decimals": 0,
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 12,
        "y": 1
      },
      "id": 207,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "max(alertmanager_cluster_members{instance=~\"$instance\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "title": "Cluster size",
      "type": "stat"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Current number of active alerts.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "fixedColor": "#bf1b00",
            "mode": "fixed"
          },
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 15,
        "y": 1
      },
      "id": 2,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "max(alertmanager_alerts{state=\"active\", instance=~\"$instance\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "title": "Number of active alerts",
      "type": "stat"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Current number of suppressed alerts.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "fixedColor": "#f9e2d2",
            "mode": "fixed"
          },
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 18,
        "y": 1
      },
      "id": 3,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "max(alertmanager_alerts{state=\"suppressed\", instance=~\"$instance\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "title": "Number of suppressed alerts",
      "type": "stat"
    },
    {
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Current number of active silences.",
      "fieldConfig": {
        "defaults": {
          "color": {
            "fixedColor": "#f9e2d2",
            "mode": "fixed"
          },
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 21,
        "y": 1
      },
      "id": 121,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.3.1",
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "max(alertmanager_silences{state=\"active\", instance=~\"$instance\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "title": "Number of active silences",
      "type": "stat"
    },
    {
      "collapsed": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 6
      },
      "id": 113,
      "panels": [],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Notifications",
      "type": "row"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Number of sent notifications to distinct integrations such as PagerDuty, Slack and so on. On negative axis are displayed failed notifications.",
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 24,
        "x": 0,
        "y": 7
      },
      "hiddenSeries": false,
      "id": 118,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": false,
        "hideEmpty": true,
        "hideZero": true,
        "max": false,
        "min": false,
        "rightSide": true,
        "show": true,
        "sort": "total",
        "sortDesc": true,
        "total": true,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "repeat": "instance",
      "repeatDirection": "h",
      "seriesOverrides": [
        {
          "alias": "/Failed.*/",
          "color": "#99440a",
          "transform": "negative-Y"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(increase(alertmanager_notifications_total{instance=~\"$instance\"}[$__interval])) by (integration)",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{ integration}}",
          "refId": "B"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(increase(alertmanager_notifications_failed_total{instance=~\"$instance\"}[$__interval])) by (integration)",
          "format": "time_series",
          "hide": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "Failed {{ integration }}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Notifications sent from $instance",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "logBase": 1,
          "show": true
        },
        {
          "format": "short",
          "logBase": 1,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Duration of notification sends in 0.99 and 0.9 quantiles per integration.",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 6,
        "w": 24,
        "x": 0,
        "y": 12
      },
      "hiddenSeries": false,
      "id": 115,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": false,
        "hideEmpty": true,
        "hideZero": true,
        "max": false,
        "min": false,
        "rightSide": true,
        "show": true,
        "sort": "avg",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "repeat": "instance",
      "repeatDirection": "h",
      "seriesOverrides": [
        {
          "alias": "/0.99.*/",
          "linewidth": 1
        },
        {
          "alias": "/0.5 .*/",
          "linewidth": 2
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(histogram_quantile(0.9,rate(alertmanager_notification_latency_seconds_bucket{instance=~\"$instance\"}[$__interval]))) by (integration)",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "0.9q {{ integration }}",
          "refId": "B"
        },
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(histogram_quantile(0.99,rate(alertmanager_notification_latency_seconds_bucket{instance=~\"$instance\"}[$__interval]))) by (integration)",
          "format": "time_series",
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "0.99q  {{ integration }}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Notification durations per integration on $instance",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "s",
          "logBase": 1,
          "show": true
        },
        {
          "format": "short",
          "logBase": 1,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "collapsed": false,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 18
      },
      "id": 18,
      "panels": [],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Alerts",
      "type": "row"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Number of alerts by state such as `active`, `suppressed` etc.",
      "fill": 4,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 24,
        "x": 0,
        "y": 19
      },
      "hiddenSeries": false,
      "id": 6,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null as zero",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "repeat": "instance",
      "repeatDirection": "h",
      "seriesOverrides": [
        {
          "alias": "active",
          "color": "#bf1b00"
        },
        {
          "alias": "suppressed",
          "color": "#2f575e"
        }
      ],
      "spaceLength": 10,
      "stack": true,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(alertmanager_alerts{instance=~\"$instance\"}) by (state)",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{state}}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Active alerts in $instance",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "logBase": 1,
          "show": true
        },
        {
          "format": "short",
          "logBase": 1,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": {
        "uid": "$datasource"
      },
      "description": "Number of received alerts from Prometheus by status `firing` on positive axis and `resolved` on negative axis.",
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 5,
        "w": 24,
        "x": 0,
        "y": 24
      },
      "hiddenSeries": false,
      "id": 8,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "9.3.1",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "repeat": "instance",
      "repeatDirection": "h",
      "seriesOverrides": [
        {
          "alias": "resolved",
          "color": "#7eb26d",
          "transform": "negative-Y"
        },
        {
          "alias": "firing",
          "color": "#99440a"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "datasource": {
            "uid": "$datasource"
          },
          "expr": "sum(increase(alertmanager_alerts_received_total{instance=~\"$instance\"}[$__interval])) by (status)",
          "format": "time_series",
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{ status }}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeRegions": [],
      "title": "Received alerts by status for $instance",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "mode": "time",
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "logBase": 1,
          "show": true
        },
        {
          "format": "short",
          "logBase": 1,
          "show": true
        }
      ],
      "yaxis": {
        "align": false
      }
    },
    {
      "collapsed": true,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 29
      },
      "id": 34,
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "description": "Shows cluster score representing cluster health. From Hashicorps official documentation: \n> This metric describes a node's perception of its own health based on how well it is meeting the soft real-time requirements of the protocol. This metric ranges from 0 to 8, where 0 indicates \"totally healthy\".\n\nFor more info see https://www.consul.io/docs/agent/telemetry.html#cluster-health",
          "fill": 1,
          "gridPos": {
            "h": 4,
            "w": 6,
            "x": 0,
            "y": 20
          },
          "id": 57,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Number of failed peers",
              "color": "#bf1b00",
              "fill": 7
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_cluster_health_score{instance=~\"$instance\"}",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Cluster health score",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Clusterhealth score for $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "description": "Shows gossip cluster members count in time and failing peers in case of any in red color.",
          "fill": 1,
          "gridPos": {
            "h": 4,
            "w": 6,
            "x": 0,
            "y": 24
          },
          "id": 38,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Number of failed peers",
              "color": "#bf1b00",
              "fill": 7
            }
          ],
          "spaceLength": 10,
          "stack": true,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_cluster_members{instance=~\"$instance\"}",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Number of cluster members",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_cluster_failed_peers{instance=~\"$instance\"}",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Number of failed peers",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Cluster members count on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "description": "On positive axis shows number of peers that joined the cluster and on negative axis number of peers that left the cluster.",
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 28
          },
          "id": 75,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Cluster left peers",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_cluster_peers_left_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Cluster joined peers",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_cluster_peers_joined_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Cluster left peers",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Cluster peers left/joined on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "description": "On positive axis is number of attempts to reconnect the cluster. On negative axis if number of failed attempts.",
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 34
          },
          "id": 68,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Failed reconnections",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_cluster_reconnections_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Sucessful reconnections",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_cluster_reconnections_failed_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Failed reconnections",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Cluster reconnections on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "description": "On positive axis is number of sent cluster messages by type `update`  or `full_state` and on negative axis the same for received messages.",
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 40
          },
          "id": 48,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "/received.*/",
              "transform": "negative-Y"
            },
            {
              "alias": "/.*full_state.*/",
              "color": "#629e51"
            },
            {
              "alias": "/.*update.*/",
              "color": "#f4d598"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "sum(increase(alertmanager_cluster_messages_sent_total{instance=~\"$instance\"}[$__interval])) by (msg_type)",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "sent {{msg_type}}",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "sum(increase(alertmanager_cluster_messages_received_total{instance=~\"$instance\"}[$__interval])) by (msg_type)",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "received {{msg_type}}",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Cluster messages count on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "description": "On positive axis is size of sent cluster messages by type `update`  or `full_state` and on negative axis the same for received messages.",
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 46
          },
          "id": 53,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "/received.*/",
              "transform": "negative-Y"
            },
            {
              "alias": "/.*full_state.*/",
              "color": "#629e51"
            },
            {
              "alias": "/.*update.*/",
              "color": "#f4d598"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "sum(increase(alertmanager_cluster_messages_sent_size_total{instance=~\"$instance\"}[$__interval])) by (msg_type)",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "sent {{msg_type}}",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "sum(increase(alertmanager_cluster_messages_received_size_total{instance=~\"$instance\"}[$__interval])) by (msg_type)",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "received {{msg_type}}",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Cluster messages size on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "bytes",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "description": "On positive axis is number of queued cluster messages and on negative axis number of pruned messages.",
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 52
          },
          "id": 62,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Pruned messaged",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_cluster_messages_pruned_total{instance=~\"$instance\"}",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Pruned messaged",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_cluster_messages_queued{instance=~\"$instance\"}",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Queued messages",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Cluster messages queue on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        }
      ],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Cluster members",
      "type": "row"
    },
    {
      "collapsed": true,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 30
      },
      "id": 284,
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 10
          },
          "id": 314,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "/dropped/",
              "color": "#cca300",
              "transform": "negative-Y"
            },
            {
              "alias": "/failed/",
              "color": "#bf1b00",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_oversized_gossip_message_sent_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "{{key}}",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_oversized_gossip_message_dropped_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "dropped {{key}}",
              "refId": "B"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_oversized_gossip_message_failure_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "failed {{key}}",
              "refId": "C"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Count of oversized gossip messages on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 16
          },
          "id": 307,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "histogram_quantile(1,rate(alertmanager_oversize_gossip_message_duration_seconds_bucket{instance=~\"$instance\"}[$__interval]))",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "{{key}}",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Duration of oversized gossip messages on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 22
          },
          "id": 303,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_silences_gossip_messages_propagated_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "silences",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_nflog_gossip_messages_propagated_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "nf_log",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Number of  propagated gossip messages on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        }
      ],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Gossip messages",
      "type": "row"
    },
    {
      "collapsed": true,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 31
      },
      "id": 84,
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 11
          },
          "id": 94,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_nflog_queries_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Nf log query count",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_nflog_query_errors_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Nf log query errors",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Nf log queries count for $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 17
          },
          "id": 106,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "histogram_quantile(1,rate(alertmanager_nflog_query_duration_seconds_bucket{instance=~\"$instance\"}[$__interval]))",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Nf log query duration",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Nf log query duration for $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 23
          },
          "id": 97,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_nflog_snapshot_size_bytes{instance=~\"$instance\"}",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Nf log snapshot size",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Nf log snapshot size for $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "bytes",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 29
          },
          "id": 101,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "rate(alertmanager_nflog_snapshot_duration_seconds_sum{instance=~\"$instance\"}[$__interval]) / rate(alertmanager_nflog_snapshot_duration_seconds_sum{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "Nf log snapshot size",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Nf log snapshot duration for $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 35
          },
          "id": 92,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Cluster left peers",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_nflog_gc_duration_seconds{instance=~\"$instance\"}",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Cluster joined peers",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Nf log Go GC time for $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        }
      ],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Nflog",
      "type": "row"
    },
    {
      "collapsed": true,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 32
      },
      "id": 123,
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 12
          },
          "id": 129,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_silences{instance=~\"$instance\"}",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "{{state}}",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Silences count by state on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 18
          },
          "id": 134,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Silecnces query fails",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_silences_queries_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "Silecnces query count",
              "refId": "A"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "increase(alertmanager_silences_query_errors_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Silecnces query fails",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Silences query count on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 24
          },
          "id": 138,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "histogram_quantile(1,rate(alertmanager_silences_query_duration_seconds_bucket{instance=~\"$instance\"}[$__interval]))",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "Silecnces query duration",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Silences query duration on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 30
          },
          "id": 149,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_silences_snapshot_size_bytes{instance=~\"$instance\"}",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "Silecnces snapshot size",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Silences snapshot size on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "bytes",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 36
          },
          "id": 143,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_silences_snapshot_duration_seconds{instance=~\"$instance\", quantile=\"0.99\"}",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "Silecnces snapshot duration",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Silences snapshot duration on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 42
          },
          "id": 131,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null as zero",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "Nf log query errors",
              "color": "#890f02",
              "transform": "negative-Y"
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "alertmanager_silences_gc_duration_seconds{instance=~\"$instance\"}",
              "format": "time_series",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "Silecnces GC  duration",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Silences GC duraton on $instance",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        }
      ],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Silences",
      "type": "row"
    },
    {
      "collapsed": true,
      "datasource": {
        "type": "prometheus",
        "uid": "prometheus"
      },
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 33
      },
      "id": 173,
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "decimals": 2,
          "fill": 1,
          "gridPos": {
            "h": 7,
            "w": 6,
            "x": 0,
            "y": 13
          },
          "id": 175,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "/Limit .*/",
              "color": "#C15C17",
              "dashes": true,
              "fill": 0
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "rate(process_cpu_seconds_total{instance=~\"$instance\"}[$__interval])",
              "format": "time_series",
              "groupBy": [
                {
                  "params": [
                    "$__interval"
                  ],
                  "type": "time"
                },
                {
                  "params": [
                    "null"
                  ],
                  "type": "fill"
                }
              ],
              "interval": "",
              "intervalFactor": 1,
              "legendFormat": "{{instance}}",
              "orderByTime": "ASC",
              "policy": "default",
              "refId": "A",
              "resultFormat": "time_series",
              "select": [
                [
                  {
                    "params": [
                      "value"
                    ],
                    "type": "field"
                  },
                  {
                    "params": [],
                    "type": "mean"
                  }
                ]
              ],
              "tags": []
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "max(kube_pod_container_resource_limits_cpu_cores{pod=~\"$instance\"}) by (pod)",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Limit {{pod}}",
              "refId": "B"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "CPU usage/s for $instance",
          "tooltip": {
            "shared": true,
            "sort": 2,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "short",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        },
        {
          "aliasColors": {},
          "bars": false,
          "dashLength": 10,
          "dashes": false,
          "datasource": {
            "uid": "$datasource"
          },
          "fill": 1,
          "gridPos": {
            "h": 7,
            "w": 6,
            "x": 0,
            "y": 20
          },
          "id": 177,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "repeat": "instance",
          "repeatDirection": "h",
          "seriesOverrides": [
            {
              "alias": "/Limit .*/",
              "color": "#C15C17",
              "dashes": true,
              "fill": 0
            }
          ],
          "spaceLength": 10,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "process_resident_memory_bytes{instance=~\"$instance\"}",
              "format": "time_series",
              "hide": false,
              "interval": "",
              "intervalFactor": 1,
              "legendFormat": "{{ instance }}",
              "refId": "E"
            },
            {
              "datasource": {
                "uid": "$datasource"
              },
              "expr": "max(kube_pod_container_resource_limits_memory_bytes{pod=~\"$instance\"}) by (pod)",
              "format": "time_series",
              "intervalFactor": 1,
              "legendFormat": "Limit {{ pod }}",
              "refId": "A"
            }
          ],
          "thresholds": [],
          "timeRegions": [],
          "title": "Memory usage for $instance",
          "tooltip": {
            "shared": true,
            "sort": 2,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "bytes",
              "logBase": 1,
              "show": true
            },
            {
              "format": "short",
              "logBase": 1,
              "show": true
            }
          ],
          "yaxis": {
            "align": false
          }
        }
      ],
      "targets": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "prometheus"
          },
          "refId": "A"
        }
      ],
      "title": "Resources",
      "type": "row"
    }
  ]

export default alertsPanelData;