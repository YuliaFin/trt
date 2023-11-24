declare function ExchangeRate({ from, to, setUrl, setActive, }: {
    from: string;
    to: string;
    setUrl: (url: string) => void;
    setActive: (value: boolean) => void;
}): any;
export default ExchangeRate;
