import React from "react";
import ReactDOM from "react-dom/client";

/*
    *Header
      *logo
      *Nav items
    *Body
      *search
      *Cart container
        *carts
          *img
          *Name of resta
          *Delivery time
          *star rating
    *Footer
      *copyright
      *links
      *address
      *contact
*/
var reslistObj=[
            {
                "type": "restaurant",
                "info": {
                    "resId": 21582886,
                    "name": "Tipplr",
                    "image": {
                        "url": "https://b.zmtcdn.com//data//pictures//6//21582886//c36ba367fa9b9a7e9650ae64ff59762d_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21582886\/c36ba367fa9b9a7e9650ae64ff59762d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.5",
                        "rating_text": "4.5",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "1,172",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "1,172",
                                "reviewTextSmall": "1,172 Reviews",
                                "subtext": "1,172 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,100 for two"
                    },
                    "cfo": {
                        "text": "\u20b9450 for one"
                    },
                    "locality": {
                        "name": "Deccan Gymkhana, Pune",
                        "address": "797\/3, Ground Floor, Rajwant Apartment, Bhandarkar Road, Deccan Gymkhana, Pune, Maharashtra",
                        "localityUrl": "pune\/deccan-gymkhana-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA4MlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/alcoholic-beverages\/",
                            "name": "Alcoholic Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,100 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/tipplr-deccan-gymkhana\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "2.5 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9477829\",\"bzone\":\"0\",\"campaign_id\":\"18454500\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21582886\",\"isNewAd\":\"34\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":15,\\\"boosted_rank\\\":10,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.046792\\\",\\\"cost_for_two_ctr\\\":\\\"0.05269\\\",\\\"distance\\\":\\\"2.5952811241149902\\\",\\\"organic_ctr\\\":\\\"0.012267\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"480\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7796717487294843\\\",\\\"cost_for_two_ctr\\\":\\\"0.6892086330935252\\\",\\\"cost_per_unit\\\":\\\"0.6388044847903968\\\",\\\"distance\\\":\\\"0.8108729200810653\\\",\\\"organic_ctr\\\":\\\"0.12369917715392062\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.0250042815550608\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.4992182804336639}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21582886\",\"element_type\":\"listing\",\"rank\":10,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21771689,
                    "name": "One8 Commune",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21771689\/8014450dff30a03161be9d0ee61a2c3c_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21771689\/8014450dff30a03161be9d0ee61a2c3c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21771689\/863f15c3132113775234206bbf428e47_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.0",
                        "rating_text": "4.0",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "384",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.0",
                                "reviewCount": "384",
                                "reviewTextSmall": "384 Reviews",
                                "subtext": "384 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.0",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,700 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,100 for one"
                    },
                    "locality": {
                        "name": "Koregaon Park, Pune",
                        "address": "Plot 299, Lane B, Near Clover Classic, North Main Road Koregaon Park, Pune",
                        "localityUrl": "pune\/koregaon-park-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sushi\/",
                            "name": "Sushi"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/rolls\/",
                            "name": "Rolls"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/mughlai\/",
                            "name": "Mughlai"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/salad\/",
                            "name": "Salad"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,700 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/one8-commune-koregaon-park\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "4.2 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9478359\",\"bzone\":\"0\",\"campaign_id\":\"18455031\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21771689\",\"isNewAd\":\"34\",\"ad_position\":\"11\",\"slider_position\":\"11\",\"slider_sequence\":\"11\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":98,\\\"boosted_rank\\\":11,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.046731\\\",\\\"cost_for_two_ctr\\\":\\\"0\\\",\\\"distance\\\":\\\"4.2750139236450195\\\",\\\"organic_ctr\\\":\\\"0.013082\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"1493\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7786553361659585\\\",\\\"cost_for_two_ctr\\\":\\\"0\\\",\\\"cost_per_unit\\\":\\\"0.6673671513302735\\\",\\\"distance\\\":\\\"0.5580397430524088\\\",\\\"organic_ctr\\\":\\\"0.13191755404969344\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.08283381857624023\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.48424238996786706}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21771689\",\"element_type\":\"listing\",\"rank\":11,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 6508002,
                    "name": "Sante Spa Cuisine",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/6508002\/3ff38e7519a70bb09157e1b8aa522d4f_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/6508002\/3ff38e7519a70bb09157e1b8aa522d4f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/6508002\/9c4e7ddf09c9f112703f10c7f0d3d375_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.5",
                        "rating_text": "4.5",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "6,621",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.7",
                                "reviewCount": "3,637",
                                "reviewTextSmall": "3,637 Reviews",
                                "subtext": "3,637 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.7",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.3",
                                "reviewCount": "2,984",
                                "reviewTextSmall": "2,984 Reviews",
                                "subtext": "2,984 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.3",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b9800 for one"
                    },
                    "locality": {
                        "name": "Koregaon Park, Pune",
                        "address": "Lane 1, Near Sunderban Resorts, Koregaon Park, Pune",
                        "localityUrl": "pune\/koregaon-park-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/health-food\/",
                            "name": "Healthy Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/thai\/",
                            "name": "Thai"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/lebanese\/",
                            "name": "Lebanese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,000 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/sante-spa-cuisine-1-koregaon-park\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "3.8 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9479556\",\"bzone\":\"0\",\"campaign_id\":\"18456239\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"6508002\",\"isNewAd\":\"34\",\"ad_position\":\"12\",\"slider_position\":\"12\",\"slider_sequence\":\"12\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":8,\\\"boosted_rank\\\":12,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.03337\\\",\\\"cost_for_two_ctr\\\":\\\"0.051787\\\",\\\"distance\\\":\\\"3.9723711013793945\\\",\\\"organic_ctr\\\":\\\"0.041668\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"584\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.5560276597517287\\\",\\\"cost_for_two_ctr\\\":\\\"0.6773969914977109\\\",\\\"cost_per_unit\\\":\\\"0.7583159857472426\\\",\\\"distance\\\":\\\"0.603593503912318\\\",\\\"organic_ctr\\\":\\\"0.42017586318167144\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.030941371239367473\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.47155504794991243}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"6508002\",\"element_type\":\"listing\",\"rank\":12,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21541699,
                    "name": "Oi Brewhouse",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21541699\/d98c3bc093b1a399b1a3331102402c76_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21541699\/d98c3bc093b1a399b1a3331102402c76_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "739",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "739",
                                "reviewTextSmall": "739 Reviews",
                                "subtext": "739 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,700 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,100 for one"
                    },
                    "locality": {
                        "name": "Kalyani Nagar, Pune",
                        "address": "Ground Floor, Solitaire, Near Aga Khan Palace, Kalyani Nagar, Pune",
                        "localityUrl": "pune\/kalyani-nagar-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/oriental\/",
                            "name": "Oriental"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,700 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/oi-brewhouse-kalyani-nagar\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "5.8 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9474016\",\"bzone\":\"0\",\"campaign_id\":\"18450678\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21541699\",\"isNewAd\":\"34\",\"ad_position\":\"13\",\"slider_position\":\"13\",\"slider_sequence\":\"13\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":5,\\\"boosted_rank\\\":13,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.045216\\\",\\\"cost_for_two_ctr\\\":\\\"0.060347\\\",\\\"distance\\\":\\\"5.937921047210693\\\",\\\"organic_ctr\\\":\\\"0.008284\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"55\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7534116470882279\\\",\\\"cost_for_two_ctr\\\":\\\"0.7893655984303466\\\",\\\"cost_per_unit\\\":\\\"0.8755287593556638\\\",\\\"distance\\\":\\\"0.3077391647268989\\\",\\\"organic_ctr\\\":\\\"0.08353501129396579\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.0007421362105383342\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.4691551077300573}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21541699\",\"element_type\":\"listing\",\"rank\":13,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20737351,
                    "name": "Ventana",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20737351\/ecad5b50e9b2a48db0511a467d6e072f_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20737351\/ecad5b50e9b2a48db0511a467d6e072f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20737351\/ea3c8539dd8286594428497d813a57b3_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.2",
                        "rating_text": "4.2",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,481",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.4",
                                "reviewCount": "1,380",
                                "reviewTextSmall": "1,380 Reviews",
                                "subtext": "1,380 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.4",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "101",
                                "reviewTextSmall": "101 Reviews",
                                "subtext": "101 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9550 for one"
                    },
                    "locality": {
                        "name": "Viman Nagar, Pune",
                        "address": "Unit 201, Survey 206, Turning Point 2, 3rd Floor, Viman Nagar, Pune",
                        "localityUrl": "pune\/viman-nagar-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTE0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/indonesian\/",
                            "name": "Indonesian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/coffee\/",
                            "name": "Coffee"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,300 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/ventana-viman-nagar\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "7.8 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9467860\",\"bzone\":\"0\",\"campaign_id\":\"18444515\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20737351\",\"isNewAd\":\"34\",\"ad_position\":\"14\",\"slider_position\":\"14\",\"slider_sequence\":\"14\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":101,\\\"boosted_rank\\\":14,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.042193\\\",\\\"cost_for_two_ctr\\\":\\\"0.070621\\\",\\\"distance\\\":\\\"7.953175067901611\\\",\\\"organic_ctr\\\":\\\"0.018924\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"712\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7030409064400567\\\",\\\"cost_for_two_ctr\\\":\\\"0.9237540876389797\\\",\\\"cost_per_unit\\\":\\\"0.9582149837814167\\\",\\\"distance\\\":\\\"0.004403374228780595\\\",\\\"organic_ctr\\\":\\\"0.19082768635043562\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.03824855854312953\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.46792685330513756}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20737351\",\"element_type\":\"listing\",\"rank\":14,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20832356,
                    "name": "Yakii",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20832356\/477fe357fea5ecd35d42a1b35c68e206_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20832356\/477fe357fea5ecd35d42a1b35c68e206_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20832356\/c5e1678262cbf4d0dc7054ad5ca0f977_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,736",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.4",
                                "reviewCount": "1,486",
                                "reviewTextSmall": "1,486 Reviews",
                                "subtext": "1,486 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.4",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.1",
                                "reviewCount": "250",
                                "reviewTextSmall": "250 Reviews",
                                "subtext": "250 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.1",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,000 for one"
                    },
                    "locality": {
                        "name": "Deccan Gymkhana, Pune",
                        "address": "1251\/1\/2, Shivaji Nagar, Deccan Gymkhana, Pune",
                        "localityUrl": "pune\/deccan-gymkhana-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/thai\/",
                            "name": "Thai"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sushi\/",
                            "name": "Sushi"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,500 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/yakii-deccan-gymkhana\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.6 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9473941\",\"bzone\":\"0\",\"campaign_id\":\"18450603\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20832356\",\"isNewAd\":\"34\",\"ad_position\":\"15\",\"slider_position\":\"15\",\"slider_sequence\":\"15\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":23,\\\"boosted_rank\\\":15,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.029503\\\",\\\"cost_for_two_ctr\\\":\\\"0.044943\\\",\\\"distance\\\":\\\"1.6696628332138062\\\",\\\"organic_ctr\\\":\\\"0.030798\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"1040\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.49159376822461054\\\",\\\"cost_for_two_ctr\\\":\\\"0.5878744277305428\\\",\\\"cost_per_unit\\\":\\\"0.40290698672451086\\\",\\\"distance\\\":\\\"0.9501968728370391\\\",\\\"organic_ctr\\\":\\\"0.31056389157792835\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.05697322600901981\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.45623147401108993}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20832356\",\"element_type\":\"listing\",\"rank\":15,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20720083,
                    "name": "Loco Otro",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20720083\/a1062cde73a894ebc210233b3cf0a937_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20720083\/a1062cde73a894ebc210233b3cf0a937_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20720083\/fa0b90eea286dd53040d866b2ff7c5ca_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.6",
                        "rating_text": "4.6",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "699",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.7",
                                "reviewCount": "306",
                                "reviewTextSmall": "306 Reviews",
                                "subtext": "306 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.7",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.4",
                                "reviewCount": "393",
                                "reviewTextSmall": "393 Reviews",
                                "subtext": "393 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.4",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,000 for one"
                    },
                    "locality": {
                        "name": "Aundh, Pune",
                        "address": "129 & 13, Plot 101, 1st & 2nd Floor, Anand HSG Society, Aundh, Pune",
                        "localityUrl": "pune\/aundh-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/mexican\/",
                            "name": "Mexican"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDdcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/goan\/",
                            "name": "Goan"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sea-food\/",
                            "name": "Seafood"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,500 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/loco-otro-aundh\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "6.5 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9436768\",\"bzone\":\"0\",\"campaign_id\":\"18413345\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20720083\",\"isNewAd\":\"34\",\"ad_position\":\"16\",\"slider_position\":\"16\",\"slider_sequence\":\"16\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":267,\\\"boosted_rank\\\":16,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.035424\\\",\\\"cost_for_two_ctr\\\":\\\"0.064443\\\",\\\"distance\\\":\\\"6.845982551574707\\\",\\\"organic_ctr\\\":\\\"0.012196\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"777\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.5936452607588147\\\",\\\"cost_for_two_ctr\\\":\\\"0.9547959818650547\\\",\\\"cost_per_unit\\\":\\\"0.7618045792628316\\\",\\\"distance\\\":\\\"0.342980894550357\\\",\\\"organic_ctr\\\":\\\"0.12298322039367537\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.03618194348725017\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.5170454593241096}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20720083\",\"element_type\":\"listing\",\"rank\":16,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21083741,
                    "name": "Fiori",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21083741\/82f315a23857fca7850210e824cbf6c1_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21083741\/82f315a23857fca7850210e824cbf6c1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21083741\/f694b9e2f2ba92d9c5e75d1ae34b26f8_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.1",
                        "rating_text": "4.1",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,168",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "1,164",
                                "reviewTextSmall": "1,164 Reviews",
                                "subtext": "1,164 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.8",
                                "reviewCount": "4",
                                "reviewTextSmall": "4 Reviews",
                                "subtext": "4 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.8",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9550 for one"
                    },
                    "locality": {
                        "name": "Lonavala, Pune",
                        "address": "CTS 46, Lonavala, Pune",
                        "localityUrl": "pune\/lonavala-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/cafes\/",
                            "name": "Cafe"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/coffee\/",
                            "name": "Coffee"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sandwich\/",
                            "name": "Sandwich"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pasta\/",
                            "name": "Pasta"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,300 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/fiori-1-lonavala\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "53.9 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21083741\",\"element_type\":\"listing\",\"rank\":17}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 18661262,
                    "name": "The Daily All Day",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/18661262\/6fea53d5ee3cf16a743af5d4af50486a_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/18661262\/6fea53d5ee3cf16a743af5d4af50486a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/18661262\/e4c861a30ebd142cce57d96ca9ce95d5_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.4",
                        "rating_text": "4.4",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "4,703",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "2,947",
                                "reviewTextSmall": "2,947 Reviews",
                                "subtext": "2,947 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.3",
                                "reviewCount": "1,756",
                                "reviewTextSmall": "1,756 Reviews",
                                "subtext": "1,756 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.3",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b93,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,400 for one"
                    },
                    "locality": {
                        "name": "Koregaon Park, Pune",
                        "address": "Lane 7, Near State Bank Of India, Koregaon Park, Pune",
                        "localityUrl": "pune\/koregaon-park-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/salad\/",
                            "name": "Salad"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b93,500 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/the-daily-all-day-1-koregaon-park\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "4.8 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9406098\",\"bzone\":\"0\",\"campaign_id\":\"18382643\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18661262\",\"isNewAd\":\"34\",\"ad_position\":\"18\",\"slider_position\":\"18\",\"slider_sequence\":\"18\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":29,\\\"boosted_rank\\\":18,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.026245\\\",\\\"cost_for_two_ctr\\\":\\\"0.056321\\\",\\\"distance\\\":\\\"4.77564811706543\\\",\\\"organic_ctr\\\":\\\"0.013916\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"413\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.4398210215846628\\\",\\\"cost_for_two_ctr\\\":\\\"0.8344593593504609\\\",\\\"cost_per_unit\\\":\\\"0.6273542007875517\\\",\\\"distance\\\":\\\"0.5899758844865112\\\",\\\"organic_ctr\\\":\\\"0.1403275250080671\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.015276820583505627\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.5041590833119185}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18661262\",\"element_type\":\"listing\",\"rank\":18,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21260661,
                    "name": "Aloraa Garden Kitchen & Bar",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21260661\/ea1bd1f00cdc3868c98e388a7bdb1b8b_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21260661\/ea1bd1f00cdc3868c98e388a7bdb1b8b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21260661\/445f222a7cce8fd7443286d48e56ddd5_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.4",
                        "rating_text": "4.4",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "2,458",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.4",
                                "reviewCount": "2,458",
                                "reviewTextSmall": "2,458 Reviews",
                                "subtext": "2,458 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.4",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,100 for two"
                    },
                    "cfo": {
                        "text": "\u20b9850 for one"
                    },
                    "locality": {
                        "name": "Baner, Pune",
                        "address": "Behind Mercedes Showroom, Baner, Pune",
                        "localityUrl": "pune\/baner-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 6pm",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/maharashtrian\/",
                            "name": "Maharashtrian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/kebab\/",
                            "name": "Kebab"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/biryani\/",
                            "name": "Biryani"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,100 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/aloraa-garden-kitchen-bar-baner\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "10.8 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21260661\",\"element_type\":\"listing\",\"rank\":19}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 18680690,
                    "name": "Elephant & Co.",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/18680690\/d55a31022c522da0f1873dac8687e9a4_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/18680690\/d55a31022c522da0f1873dac8687e9a4_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/18680690\/f36c363ca3d03e6e51a4dbdaa070e14f_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.4",
                        "rating_text": "4.4",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "3,622",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "2,611",
                                "reviewTextSmall": "2,611 Reviews",
                                "subtext": "2,611 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.2",
                                "reviewCount": "1,011",
                                "reviewTextSmall": "1,011 Reviews",
                                "subtext": "1,011 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.2",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b9800 for one"
                    },
                    "locality": {
                        "name": "Baner, Pune",
                        "address": "1B, Shop 5, Survey 131, Ground Floor, Near Sai Heritage, Baner, Pune",
                        "localityUrl": "pune\/baner-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/salad\/",
                            "name": "Salad"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA4MlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/alcoholic-beverages\/",
                            "name": "Alcoholic Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,000 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/elephant-co-baner\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "9.4 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"banner_id\":\"9478362\",\"bzone\":\"0\",\"campaign_id\":\"18455034\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18680690\",\"isNewAd\":\"34\",\"ad_position\":\"20\",\"slider_position\":\"20\",\"slider_sequence\":\"20\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":12,\\\"boosted_rank\\\":20,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.055228\\\",\\\"cost_for_two_ctr\\\":\\\"0.067494\\\",\\\"distance\\\":\\\"9.720879554748535\\\",\\\"organic_ctr\\\":\\\"0.061495\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"286\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.9255262099477141\\\",\\\"cost_for_two_ctr\\\":\\\"1\\\",\\\"cost_per_unit\\\":\\\"0.9568631518382816\\\",\\\"distance\\\":\\\"0\\\",\\\"organic_ctr\\\":\\\"0.6201093094546628\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.007983000229726625\\\"},\\\"search_id\\\":\\\"5a8a940a-95b5-4b00-921e-02151e53fc56\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.49352947251862656}\",\"subzone_id\":\"0\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18680690\",\"element_type\":\"listing\",\"rank\":20,\"metadata\":{\"is_ad\":\"true\"}}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21493649,
                    "name": "Klinq - Cocktails & Cuisine",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21493649\/df694c6b349ecc399cab6f08a3d7b0b5_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21493649\/df694c6b349ecc399cab6f08a3d7b0b5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21493649\/e16a2bfad8bc6e8dde38940a0b39388a_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,522",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "1,522",
                                "reviewTextSmall": "1,522 Reviews",
                                "subtext": "1,522 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,400 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,000 for one"
                    },
                    "locality": {
                        "name": "Viman Nagar, Pune",
                        "address": "5th Floor, Town Square, Mhada Colony, Near Dorabjee's, New Airport Road, Viman Nagar, Pune",
                        "localityUrl": "pune\/viman-nagar-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/lebanese\/",
                            "name": "Lebanese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,400 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/klinq-cocktails-cuisine-viman-nagar\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "7.5 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"5a8a940a-95b5-4b00-921e-02151e53fc56\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21493649\",\"element_type\":\"listing\",\"rank\":21}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            }
]



const Header=()=>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993"></img>
        </div>
        <div className="nav-items">
             <ul><li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
             </ul>
        </div>
    </div>
    );
};

const RestaruntCart =(props) =>{
   const { resData } = props;
    return (
          <div className="res-cart">
               <img className="image-self" src={resData.image.url}></img>
               <div className="res-data">
                <b>{resData.name}</b>
                <p>{resData.cuisine} </p>
                <p>{resData.rating} </p>
                <p>{resData.timing}</p>
              </div>
          </div>
    );
};

const Body = () => {
    return (
     <div className="body">
        <div className="search">Search</div>
        <div className="res-container"> 
           <RestaruntCart
           resData={reslistObj[0]}
           />
        </div>
     </div>
    );
};

const AppLayout= ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);