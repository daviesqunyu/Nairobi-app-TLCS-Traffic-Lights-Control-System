// Example Kotlin backend/controller logic you could use in an Android app
// to talk to the Node.js API (or any REST backend) for Nairobi CBD TLCS.

package com.nairobi.tlcs

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.net.HttpURLConnection
import java.net.URL

data class RoadStatus(
    val name: String,
    val inBound: Int,
    val outBound: Int,
    val avgSpeedKph: Int
)

data class TrafficStatusResponse(
    val timestamp: String,
    val roads: List<RoadStatus>
)

class TrafficController(
    private val baseUrl: String = "http://10.0.2.2:4000" // Android emulator -> localhost
) {

    // Suspend function that fetches traffic status JSON from the Node backend.
    // In a real project you would use Retrofit or Ktor client rather than manual HttpURLConnection.
    suspend fun fetchTrafficStatusJson(): String = withContext(Dispatchers.IO) {
        val url = URL("$baseUrl/api/traffic/status")
        val connection = (url.openConnection() as HttpURLConnection).apply {
            requestMethod = "GET"
            connectTimeout = 5000
            readTimeout = 5000
        }

        connection.inputStream.bufferedReader().use { it.readText() }
    }

    // TODO: add JSON parsing (e.g. with kotlinx.serialization) to convert the raw JSON
    // into TrafficStatusResponse and feed it into your Android UI (maps, charts, etc.).
}


