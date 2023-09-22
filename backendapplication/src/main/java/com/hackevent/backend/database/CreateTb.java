package com.hackevent.backend.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.fasterxml.jackson.core.JsonProcessingException;

public class CreateTb {

    // Function to find and print pair
    static int  chkPair(int A[], int size, int x) {
        int count =0;
        for (int i = 0; i < (size - 1); i++) {
            for (int j = (i + 1); j < size; j++) {
                if (A[i] + A[j] == x) {
                    System.out.println("Pair with a given sum " + x +
                            " is (" + A[i] + ", " + A[j] + ")");


                    count++;
                }
            }
        }
        return count;

    }


    public static void main(String[] args) {
        try(Connection conn = createNewDBconnection()){
            createSchemaAndTables(conn);
            System.out.println("Tables and schema created");
        }catch (SQLException e) {
            e.printStackTrace();
        }

        int i=1;
        int j=1;
        System.out.println(i==j);
        System.out.println("To");

    }

    private static void createSchemaAndTables(Connection connection) {
        try {
            connection.prepareStatement("DROP SCHEMA if exists hackathon").execute();
            PreparedStatement statement = connection.prepareStatement("CREATE DATABASE hackathon");
            statement.execute();
            connection.setSchema("hackathon");
            String createUser = "CREATE TABLE hackathon.user ("+
                    "					id varchar(25),"+
                    "					username varchar(150)," +
                    "					password varchar(150)," +
                    "					email varchar(150)," +
                    "					phone varchar(150)," +
                    "					Constraint PK Primary Key(id)"+
                    "					)";
            String createEvent = "CREATE TABLE hackathon.event (" +
                    "					id varchar(25),"+
                    "					name varchar(150)," +
                    "					location varchar(150)," +
                    "					time varchar(150)," +
                    "					date date," +
                    "					status varchar(150)," +
                    "					Constraint PK Primary Key(id)"+
                    ")";
            String createParticipants = new StringBuilder().append("CREATE TABLE hackathon.participant (").append("id varchar(25),").append("name varchar(150),").append("					cabin_id varchar(25),").append("					Constraint PK Primary Key(id),").append("					FOREIGN KEY (event_id) REFERENCES hackathon.cabin(id)").append(")").toString();
            String createMessage = "CREATE TABLE hackathon.message (" +
                    "					id varchar(25),"+
                    "					text varchar(1000)," +
                    "					user_id varchar(25)," +
                    "					time varchar(50)," +
                    "					Constraint PK Primary Key(id),"+
                    "					FOREIGN KEY (user_id) REFERENCES hackathon.user(id)"+
                    ")";
            connection.prepareStatement(createUser).execute();
            connection.prepareStatement(createEvent).execute();
            connection.prepareStatement(createParticipants).execute();
            connection.prepareStatement(createMessage).execute();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    private static String dbhost = "jdbc:mysql://localhost:3306";
    private static String username = "root";
    //	private static String password = "Shimsha06$";
    private static String password = "root";
    private static Connection conn;

    @SuppressWarnings("finally")
    public static Connection createNewDBconnection() {
        try  {
            conn = DriverManager.getConnection(
                    dbhost, username, password);
        } catch (SQLException e) {
            System.out.println("Cannot create database connection");
            e.printStackTrace();
        } finally {
            return conn;
        }
    }
}
