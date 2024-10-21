import type { Request, Response } from "express-serve-static-core";

export const mockRequest = {} as Request;

export const mockResponse = {
	send: jest.fn(),
	status: jest.fn(() => mockResponse)
} as unknown as Response;
