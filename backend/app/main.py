from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.api.analytics import router as analytics_router


# FastAPI app
app = FastAPI(

    title="CommerceIQ API",
    version="1.0.0"

)


# CORS configuration
app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://localhost:80"
    ],

    allow_methods=["*"],

    allow_headers=["*"]

)


# Include analytics routes
app.include_router(
    analytics_router
)


# Health check endpoint
@app.get("/health")
def health():

    return {

        "status": "ok",

        "service": "CommerceIQ API"

    }