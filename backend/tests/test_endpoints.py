def test_health(client):

    response = client.get("/health")

    assert response.status_code == 200

    assert response.json()["status"] == "ok"


def test_kpis(client):

    response = client.get("/kpis")

    assert response.status_code == 200

    data = response.json()

    assert "total_revenue" in data

    assert "total_orders" in data

    assert "total_customers" in data


def test_monthly_revenue(client):

    response = client.get(
        "/monthly-revenue?year=2018"
    )

    assert response.status_code == 200

    assert isinstance(
        response.json(),
        list
    )


def test_top_products(client):

    response = client.get(
        "/top-products"
    )

    assert response.status_code == 200

    data = response.json()

    assert len(data) > 0


def test_top_categories(client):

    response = client.get(
        "/top-categories"
    )

    assert response.status_code == 200


def test_daily_orders(client):

    response = client.get(
        "/daily-orders"
    )

    assert response.status_code == 200


def test_payment_analysis(client):

    response = client.get(
        "/payment-analysis"
    )

    assert response.status_code == 200


def test_top_sellers(client):

    response = client.get(
        "/top-sellers"
    )

    assert response.status_code == 200


def test_top_states(client):

    response = client.get(
        "/top-states"
    )

    assert response.status_code == 200


def test_invalid_endpoint(client):

    response = client.get(
        "/invalid-route"
    )

    assert response.status_code == 404