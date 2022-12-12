import request from "supertest";
import app from "../../../app";

describe("Users routes", () => {
    it("should return a list of users", async () => {
        const response = await request(app).get("/api/users");
    
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
        {
            id: 1,
            name: "John Doe",
        }
        ]);
    });
    
})