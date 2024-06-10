package com.aluracursos.screenmatch.principal;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class PrincipalConBusqueda {

    public static void main(String[] args) throws IOException, InterruptedException {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Escriba el nombre de la pelicula: ");
        var busqueda = teclado.nextLine();

        String direccion = "https://www.omdbapi.com/?t=" + busqueda +"&apikey=ce3a5a20";

        HttpClient cliente = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(direccion))
                .build();

        HttpResponse<String> response = cliente
                .send(request, HttpResponse.BodyHandlers.ofString());


        System.out.println(response.body());
    }
}
