import { Children } from 'react';

export class ComponentHelper {
    static getPropArrayFromChildren = ( children, propName ) => {
        return Children.toArray(children)?.map(( { props } ) => props?.[ propName ]);
    }
}