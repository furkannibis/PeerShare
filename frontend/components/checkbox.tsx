interface CheckBoxComp {
    cbHeader: string
    cbBody: string[]
}

export function CheckBoxComp({ cbHeader, cbBody }: CheckBoxComp) {
    return (
        <fieldset className="border p-5">
            <strong className="font-semibold text-gray-900 dark:text-white lowercase">{cbHeader}</strong>
            <div className="flex justify-center gap-5">
                {cbBody.map((key, colIndex) => (
                    <div key={colIndex}>
                        <input type="radio" id={`radio-${key}`} name="network-interface" value={key} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor={`radio-${key}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{key} </label>
                    </div>
                ))}
            </div>
        </fieldset>
    );
}
