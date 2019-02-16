displayForm = () => {
    switch (this.state.currentPositionInForm) {
        case 0:
            return (
                <>
                    <FirstSection
                        update={this.update}
                        didStudentResitAYear={this.state.didStudentResitAYear}
                        courseFourYearsLong={this.state.courseFourYearsLong}
                    />
                </>
            );
        case 1:
            if (this.state.didStudentResitAYear === "true") {
                return (
                    <>
                        {this.studentWhoDidResitAYearForm()}
                    </>
                );
            } else {
                return (
                    <>

                    <input type="number"
                           value="startingYear"}
                    placeholder = "Please enter the year you started university"
                    onClick={this.update}/>
                <input type="number"
                       value="firstYearTuition"
                       onClick={this.update}/>
                <input type="number"
                    {value = "firstYearMaintenance"
                    {onClick = {this.update}/>
                    {
                    {<input type="number"
                        {value = "secondYearTuition"
                        {onClick = {this.update}/>
                        {<input type="number"
                            {value = "secondYearMaintenance"
                            {onClick = {this.update}/>
                            {
                            {{this.displayThirdYearOptionIfCourseWasFourYearsLong()}

                            {<input type="number"
                                {value = "finalYearTuition"
                                {onClick = {this.update}/>
                                {<input type="number"
                                    {value = "finalYearMaintenance"
                                    {onClick = {this.update}/>

                                    {<input
                                        {type = "button"
                                        {value = "Next"
                                        {onClick = {this.next}
                                        {/>

                                        {<input
                                            {type = "button"
                                            {value = "Previous"
                                            {onClick = {this.prev}
                                            {/>
                                                </>
                                                );
                                            }
                                                case 2:
                                                return (
                                            {<>}
                                                {<input type="number" value="yearlyIncome"
                                                        onClick={this.update}/>}
                                                {<input type="number" value="yearlyRaise"
                                                        onClick={this.update}/>}

                                                {<input}
                                                    type="button"
                                                    value="Previous"
                                                    onClick={this.prev}
                                                    />
                                                    </>
                                                    );
                                                    default:
                                                    return null;
                                                }
                                                };