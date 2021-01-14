import React from 'react';

class ContentCard extends React.Component {
    // constructor(props) {
    //     super(props);

    
    //     // this.state = { spans: 0 };

    //     this.ContentRef = React.createRef();
    //     //this is the way to create a ref
    // }

    // componentDidMount() {
    //     this.ContentRef.current.addEventListener('load', this.setSpans);
    // } 

    // setSpans = () => {
    //     const height = this.ContentRef.current.clientHeight;
    //     const spans = Math.ceil(height / 10);
    //     this.setState({ spans });
    // }

    render() {
        return (
            // <div>
            //     <img ref={this.ContentRef} alt={this.props.info} src={this.props.content} />
            // </div>
            
            <div className='ui card'>
                <div className='ui content'>
                    <div className="right floated meta"></div>
                    <p>{this.props.info}</p>
                </div>
                <div className='ui image'>
                <img alt='news' src={this.props.content} />
                </div>
                <div className='ui content'>
                    <p className='ui meta'>{this.props.date}</p>
                    <span className='ui right-floated'>
                        <i className="heart outline like icon"></i>
                    </span>
                    <span className='ui right-float'> Free </span>
                </div>
            </div>
        );
    }
}

export default ContentCard;
