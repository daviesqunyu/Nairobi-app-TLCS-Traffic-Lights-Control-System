// Minimal Java/Spring Boot style controller to complement the Node and Kotlin examples.
// This is not wired into a build here, but it shows how you could expose the same
// Nairobi CBD TLCS endpoints from a Java backend.

package com.nairobi.tlcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;
import java.util.Map;

@RestController
public class TrafficStatusController {

    @GetMapping("/api/java/traffic/status")
    public Map<String, Object> status() {
        return Map.of(
                "timestamp", Instant.now().toString(),
                "roads", List.of(
                        Map.of("name", "Kenyatta Avenue", "inBound", 120, "outBound", 95, "avgSpeedKph", 28),
                        Map.of("name", "Moi Avenue", "inBound", 150, "outBound", 110, "avgSpeedKph", 20),
                        Map.of("name", "Haile Selassie", "inBound", 90, "outBound", 130, "avgSpeedKph", 32),
                        Map.of("name", "University Way", "inBound", 60, "outBound", 55, "avgSpeedKph", 35)
                )
        );
    }
}


