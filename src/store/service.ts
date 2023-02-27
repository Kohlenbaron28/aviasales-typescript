class ApiServise {
  baseStr = 'https://aviasales-test-api.kata.academy/';
  async getKey() {
    const body = await fetch(`${this.baseStr}search`).then((res) => {
      if (!res.ok) {
        throw new Error(`error fetch URL ${`${this.baseStr}search`}, response status ${res.status}`);
      }
      return res.json();
    });

    return body.searchId;
  }

  async getTickets(searchId: string) {
    try {
      const body = await fetch(`${this.baseStr}tickets?searchId=${searchId}`).then((res) => {
        if (!res.ok) {
          throw new Error(`error fetch URL ${this.baseStr}, response status ${res.status}`);
        }
        return res.json();
      });
      return body;
    } catch {
      return {
        tickets: [],
      };
    }
  }
}

const apiServise = new ApiServise();

export default apiServise;
