'import client'
import { useState } from 'react';

export default function TableCell() {
const [content, setContent] = useState<string>(''); 

 return (
    <div>
        <div id="cell">
            <input 
            id="cell-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
        </div>

    </div>
 )
}

